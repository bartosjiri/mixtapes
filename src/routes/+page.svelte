<script lang="ts">
	import { onMount } from 'svelte';

	import {
		PlaylistsBrowserTitle,
		PlaylistsBrowserImage,
		getPlaylists,
		startPlayback,
		playlists,
		isLoading,
		isPlaying
	} from '$modules/playlists-browser';

	onMount(async () => {
		$playlists = await getPlaylists();
		$isLoading = false;
		if (!$isPlaying) startPlayback();
	});
</script>

<PlaylistsBrowserTitle />
<PlaylistsBrowserImage />
