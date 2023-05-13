import { get } from 'svelte/store';

import { playlists, activeIndex, playbackInterval } from './playlistsBrowser.store';

import { PLAYLISTS_BROWSER_DISPLAY_DURATION } from './playlistsBrowser.constants';

export const startPlayback = () => {
	const currentPlaylists = get(playlists);
	if (!currentPlaylists) return;

	const interval = setInterval(() => {
		const currentIndex = get(activeIndex);
		currentIndex === currentPlaylists.length - 1
			? activeIndex.set(0)
			: activeIndex.set(currentIndex + 1);
	}, PLAYLISTS_BROWSER_DISPLAY_DURATION);

	playbackInterval.set(interval);

	return () => clearInterval(interval);
};

export const stopPlayback = () => {
	const interval = get(playbackInterval);
	if (!interval) return;

	clearInterval(interval);
	playbackInterval.set(null);
};
