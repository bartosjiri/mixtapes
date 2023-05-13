import { writable, derived, type Writable } from 'svelte/store';

import type { PlaylistT } from '$modules/playlist-detail';

export const isLoading = writable(true);

export const playbackInterval: Writable<NodeJS.Timer | null> = writable(null);
export const playlists: Writable<PlaylistT[] | null> = writable(null);
export const activeIndex = writable(0);

export const currentPlaylist = derived([playlists, activeIndex], ([$playlists, $activeIndex]) =>
	$playlists ? $playlists[$activeIndex] : null
);
export const isPlaying = derived(playbackInterval, ($playbackInterval) => !!$playbackInterval);
export const isSelected = writable(false);
