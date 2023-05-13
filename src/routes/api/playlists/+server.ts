import { json, error, type RequestHandler } from '@sveltejs/kit';

import { env } from '$env/dynamic/private';
import { userConfig, playlistsConfig } from '$config';

import type { PlaylistT } from '$modules/playlist-detail';

type SpotifyAPIPlaylistPartialT = {
	id: string;
	name: string;
	public: boolean;
	tracks: {
		total: number;
	};
	images: {
		url: string;
		height: number;
		width: number;
	}[];
};

const getAccessToken = async (): Promise<string> => {
	if (!env.SPOTIFY_CLIENT_ID || !env.SPOTIFY_CLIENT_SECRET) {
		throw error(500, 'Missing Spotify client ID or client secret');
	}

	const clientCredentials = Buffer.from(
		`${env.SPOTIFY_CLIENT_ID}:${env.SPOTIFY_CLIENT_SECRET}`
	).toString('base64');

	try {
		const res = await fetch('https://accounts.spotify.com/api/token', {
			method: 'POST',
			headers: {
				'Content-type': 'application/x-www-form-urlencoded',
				Authorization: `Basic ${clientCredentials}`
			},
			body: 'grant_type=client_credentials'
		});

		if (res.status === 401) {
			throw error(401, 'Invalid Spotify client ID or client secret');
		}

		const data = await res.json();

		return data.access_token;
	} catch (err) {
		throw error(500);
	}
};

const getUserPlaylists = async (accessToken: string): Promise<SpotifyAPIPlaylistPartialT[]> => {
	if (!userConfig.id) {
		throw error(400, 'Missing Spotify user ID in the config file');
	}

	try {
		const res = await fetch(
			`https://api.spotify.com/v1/users/${userConfig.id}/playlists?limit=50`,
			{
				headers: {
					Authorization: `Bearer ${accessToken}`
				}
			}
		);
		// @TODO: Fetch all - pagination

		const data = await res.json();

		return [...data.items];
	} catch (err) {
		throw error(500);
	}
};

const compilePlaylists = (userPlaylists: SpotifyAPIPlaylistPartialT[]): PlaylistT[] => {
	if (!playlistsConfig?.length) {
		throw error(500, 'Missing playlists in the config file');
	}

	if (!userPlaylists) {
		throw error(500, "Could not load user's playlists");
	}

	const playlists = playlistsConfig.reduce((acc, playlistConfig) => {
		const targetPlaylist = userPlaylists.find((p) => p.id === playlistConfig.id);

		if (!targetPlaylist || !targetPlaylist.public) {
			return acc;
		}

		return [
			...acc,
			{
				id: targetPlaylist.id,
				name: playlistConfig.name || targetPlaylist.name,
				imageUrl: playlistConfig.image
					? `/assets/images/${playlistConfig.image}`
					: targetPlaylist.images[0]?.url,
				genre: playlistConfig.genre,
				artists: playlistConfig.artists,
				tracksCount: targetPlaylist.tracks?.total
			}
		];
	}, [] as PlaylistT[]);

	return playlists;
};

export const GET: RequestHandler = async () => {
	try {
		const accessToken = await getAccessToken();
		const userPlaylists = await getUserPlaylists(accessToken);
		const playlists = compilePlaylists(userPlaylists);

		return json(playlists);
	} catch (err) {
		if (import.meta.env.DEV) {
			console.error('[@DEBUG] /api/playlists - error: ', err);
		}

		throw error(500);
	}
};
