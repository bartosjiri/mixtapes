<script lang="ts">
	import { onMount } from 'svelte';
	import { fade } from 'svelte/transition';

	import { isLoading } from './preloader.store';
	import {
		playlists,
		startPlayback,
		isPlaying,
		isSelected,
		getPlaylists,
		PLAYLISTS_BROWSER_TRANSITION_DURATION
	} from '$modules/playlists-browser';

	import MixtapesLogo from './mixtapes.svg?raw';

	let loadedCount = 0;

	const launch = () => {
		$isLoading = false;
		if (!$isPlaying && !$isSelected) startPlayback();
	};

	const handleImageLoad = () => {
		loadedCount += 1;
		if (loadedCount === $playlists?.length) launch();
	};

	onMount(async () => {
		$playlists = await getPlaylists();

		setTimeout(() => {
			launch();
		}, 5000);
	});
</script>

{#if $isLoading}
	<div class:preloader={true} out:fade={{ duration: PLAYLISTS_BROWSER_TRANSITION_DURATION / 2 }}>
		<div class:logo={true}>
			{#each { length: 3 } as _}
				{@html MixtapesLogo}
			{/each}
		</div>
	</div>

	<div class:image-loader={true}>
		{#if $playlists?.length}
			{#each $playlists as playlist}
				<img src={playlist.imageUrl} alt="" on:load={handleImageLoad} on:error={handleImageLoad} />
			{/each}
		{/if}
	</div>
{/if}

<style lang="scss">
	.preloader {
		position: fixed;
		top: 0;
		bottom: 0;
		left: 0;
		right: 0;
		display: flex;
		flex-direction: column;
		justify-content: center;
		align-items: center;
		background: var(--color-background-01);
		overflow: hidden;
		z-index: 9999;

		.logo {
			position: relative;
			display: flex;
			flex-direction: column;
			justify-content: center;
			align-items: center;

			:global(svg) {
				position: absolute;
				@include fluid(height, 30, 60);
				width: auto;
				fill: none;
				stroke: var(--color-foreground-01);
				stroke-width: 2px;
				transform: translateY(250%);
				opacity: 0;
				animation: preloaderLogoEntering;
				animation-duration: 2.5s;
				animation-iteration-count: infinite;

				&:nth-child(1) {
					fill: var(--color-foreground-01);
				}

				&:nth-child(2) {
					animation-delay: 0.1s;
				}

				&:nth-child(3) {
					animation-delay: 0.2s;
				}

				&:nth-child(4) {
					animation-delay: 0.3s;
				}
			}
		}

		@keyframes preloaderLogoEntering {
			0% {
				opacity: 0;
			}

			33% {
				transform: translateY(0);
				opacity: 1;
			}

			80% {
				opacity: 1;
			}

			100% {
				transform: translateY(0);
				opacity: 0;
			}
		}
	}

	.image-loader {
		position: absolute;
		top: -9999px;
		left: -9999px;
		height: 0;
		width: 0;

		:global(img) {
			height: 0;
			width: 0;
		}
	}
</style>
