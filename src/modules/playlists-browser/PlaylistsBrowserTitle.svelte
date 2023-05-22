<script lang="ts">
	import PlaylistsBrowserTitleMarquee from './PlaylistsBrowserTitleMarquee.svelte';
	import { cursorStyle } from '$modules/cursor';

	import { isLoading } from '$modules/preloader';
	import { stopPlayback } from './managePlayback';
	import { currentPlaylist, isSelected } from './playlistsBrowser.store';

	import { PLAYLISTS_BROWSER_TRANSITION_DURATION } from './playlistsBrowser.constants';

	const titleAnimationCss = (t: number, reverse = false) => {
		return `transform: rotateX(${
			(1 - t) * (reverse ? -90 : 90)
		}deg) translateZ( calc(2.58vw + 30px));`;
	};

	const inAnimation = (_: Node) => ({
		duration: PLAYLISTS_BROWSER_TRANSITION_DURATION,
		css: (t: number) => titleAnimationCss(t)
	});

	const outAnimation = (_: Node) => ({
		duration: PLAYLISTS_BROWSER_TRANSITION_DURATION,
		css: (t: number) => titleAnimationCss(t, true)
	});

	const handleClick = () => {
		$isSelected = true;
		stopPlayback();
		$cursorStyle = 'default';
	};

	const handleKeyPress = (e: KeyboardEvent) => {
		if (e.key === 'Enter') handleClick();
	};

	const handleMouseEnter = () => {
		if (!$isSelected) $cursorStyle = 'enter';
	};
</script>

{#if !$isLoading}
	<div class:playlists-browser-title={true}>
		<div class:container={true}>
			{#key $currentPlaylist}
				{#if !$isSelected}
					<div
						class:title={true}
						in:inAnimation
						out:outAnimation
						on:click={handleClick}
						on:keypress={handleKeyPress}
						on:mouseenter={handleMouseEnter}
						on:mouseleave={() => ($cursorStyle = 'default')}
					>
						<PlaylistsBrowserTitleMarquee>{$currentPlaylist?.name}</PlaylistsBrowserTitleMarquee>
					</div>
				{/if}
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
		z-index: 11;

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
