<script lang="ts">
	import PlaylistsBrowserTitleMarquee from './PlaylistsBrowserTitleMarquee.svelte';

	import { currentPlaylist, isLoading } from './playlistsBrowser.store';

	import { PLAYLISTS_BROWSER_TRANSITION_DURATION } from './playlistsBrowser.constants';

	const titleAnimationCss = (t: number, reverse = false) => {
		return `transform: rotateX(${
			(1 - t) * (reverse ? -90 : 90)
		}deg) translateZ( calc(2.58vw + 30px));`;
	};

	const inAnimation = (_: Node) => {
		return {
			duration: PLAYLISTS_BROWSER_TRANSITION_DURATION,
			css: (t: number) => titleAnimationCss(t)
		};
	};

	const outAniamtion = (_: Node) => {
		return {
			duration: PLAYLISTS_BROWSER_TRANSITION_DURATION,
			css: (t: number) => titleAnimationCss(t, true)
		};
	};
</script>

{#if !$isLoading}
	<div class:playlists-browser-title={true}>
		<div class:container={true}>
			{#key $currentPlaylist}
				<div class:title={true} in:inAnimation out:outAniamtion>
					<PlaylistsBrowserTitleMarquee>{$currentPlaylist?.name}</PlaylistsBrowserTitleMarquee>
				</div>
			{/key}
		</div>
	</div>
{/if}

<style lang="scss">
	.playlists-browser-title {
		position: absolute;
		top: 0;
		bottom: 0;
		left: 0;
		right: 0;
		display: flex;
		flex-direction: column;
		justify-content: center;
		mix-blend-mode: difference;
		z-index: 10;

		.container {
			position: relative;
			display: flex;
			flex-direction: column;
			justify-content: center;
			width: 100vw;
			overflow-x: clip;

			.title {
				position: absolute;
				left: 0;
				right: 0;
				display: flex;
			}
		}
	}
</style>
