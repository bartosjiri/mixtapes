import sirv from 'sirv';
import polka from 'polka';
import compression from 'compression';
import * as sapper from '@sapper/server';
require('dotenv').config()

import {getClientToken, getUserProfile, getUserPlaylists} from "./api/spotify";

const {PORT, NODE_ENV} = process.env;
const dev = NODE_ENV === 'development';

const clientId = process.env.CLIENT_ID;
const clientSecret = process.env.CLIENT_SECRET;

let clientToken = null;
let userProfile = null;
let userPlaylists = null;

(async () => {
	try {
		clientToken = await getClientToken(clientId, clientSecret);
	} catch (err) {
		console.log("[ERROR] clientToken: ", err);
	}

	try {
		userProfile = await getUserProfile(clientToken, "wizzler");
	} catch (err) {
		console.log("[ERROR] userProfile: ", err);
	}

	try {
		userPlaylists = await getUserPlaylists(clientToken, "wizzler");
	} catch (err) {
		console.log("[ERROR] userPlaylists: ", err);
	}
})();

polka()
	.use(
		compression({threshold: 0}),
		sirv('static', {dev}),
		sapper.middleware({
			session: () => ({
				userProfile,
				userPlaylists
			})
		})
	)
	.listen(PORT, err => {
		if (err) console.log('[ERROR] server.js: ', err);
	});
