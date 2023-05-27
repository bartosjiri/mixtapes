import { json, error, type RequestHandler } from '@sveltejs/kit';

import { env } from '$env/dynamic/private';
import { playlistsConfig } from '$config';

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

const getPlaylistById = async (
	accessToken: string,
	playlistId: string
): Promise<SpotifyAPIPlaylistPartialT | null> => {
	try {
		const res = await fetch(`https://api.spotify.com/v1/playlists/${playlistId}`, {
			headers: {
				Authorization: `Bearer ${accessToken}`
			}
		});

		if (res.status === 404) {
			if (import.meta.env.DEV) {
				console.error(
					`[@DEBUG] /api/playlists - getPlaylist: Could not find playlist with ID ${playlistId}`
				);
			}
			return null;
		}

		const data = await res.json();
		return data;
	} catch (err) {
		throw error(500);
	}
};

const compilePlaylists = async (accessToken: string) => {
	if (!playlistsConfig?.length) {
		throw error(500, 'Missing playlists in the config file');
	}

	const playlistPromises = playlistsConfig
		.map(async (playlistConfig) => {
			const targetPlaylist = await getPlaylistById(accessToken, playlistConfig.id);

			if (!targetPlaylist || !targetPlaylist.public) {
				return null;
			}

			return {
				id: targetPlaylist.id,
				name: playlistConfig.name || targetPlaylist.name,
				imageUrl: playlistConfig.image
					? `/assets/images/${playlistConfig.image}`
					: targetPlaylist.images[0]?.url,
				genre: playlistConfig.genre,
				artists: playlistConfig.artists,
				tracksCount: targetPlaylist.tracks?.total
			};
		})
		.filter((playlist) => playlist !== null);

	const playlists = await Promise.all(playlistPromises);

	return playlists as PlaylistT[];
};

export const GET: RequestHandler = async () => {
	try {
		const accessToken = await getAccessToken();
		const playlists = await compilePlaylists(accessToken);

		return json(playlists);
	} catch (err) {
		if (import.meta.env.DEV) {
			console.error('[@DEBUG] /api/playlists - error: ', err);
		}

		throw error(500);
	}
};
