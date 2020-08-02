import sirv from 'sirv';
import polka from 'polka';
import compression from 'compression';
import * as sapper from '@sapper/server';
require('dotenv').config();

import appConfig from "./configuration/application.yml";
import playlistsConfig from "./configuration/playlists.yml";

import {getClientToken, getUserProfile, getUserPlaylists} from "./services/api/spotify";
import compilePlaylists from "./services/playlists/playlists";

const {PORT, NODE_ENV} = process.env;
const dev = NODE_ENV === 'development';

const clientId = process.env.SPOTIFY_CLIENT_ID;
const clientSecret = process.env.SPOTIFY_CLIENT_SECRET;

let clientToken = null;
let profileData = null;
let playlistsData = null;
let playlists = null;

(async () => {
	try {
		clientToken = await getClientToken(clientId, clientSecret);
	} catch (err) {
		console.log("[ERROR] clientToken: ", err);
	}

	try {
		profileData = await getUserProfile(clientToken, appConfig.user_id);
	} catch (err) {
		console.log("[ERROR] profileData: ", err);
	}

	try {
		playlistsData = await getUserPlaylists(clientToken, appConfig.user_id);
	} catch (err) {
		console.log("[ERROR] playlistsData: ", err);
	} finally {
		playlists = compilePlaylists(appConfig, playlistsConfig, playlistsData);
	}

	polka()
		.use(
			compression({threshold: 0}),
			sirv('static', {dev}),
			sapper.middleware({
				session: () => ({
					application: appConfig,
					profile: profileData,
					playlists
				})
			})
		)
		.listen(PORT, err => {
			if (err) console.log('[ERROR] server.js: ', err);
		});
})();
