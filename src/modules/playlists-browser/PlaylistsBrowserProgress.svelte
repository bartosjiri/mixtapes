<script lang="ts">
	import { fly } from 'svelte/transition';

	import { cursorStyle } from '$modules/cursor';

	import {
		playlists,
		activeIndex,
		isLoading,
		isPlaying,
		isSelected
	} from './playlistsBrowser.store';
	import { startPlayback, stopPlayback } from './managePlayback';

	import {
		PLAYLISTS_BROWSER_DISPLAY_DURATION,
		PLAYLISTS_BROWSER_TRANSITION_DURATION
	} from './playlistsBrowser.constants';

	const handleClick = () => {
		if ($isSelected) {
			$isSelected = false;
			startPlayback();
			$cursorStyle = 'pause';
			return;
		}

		if ($isPlaying) {
			stopPlayback();
			$cursorStyle = 'play';
			return;
		}

		startPlayback();
		$cursorStyle = 'pause';
	};

	const handleKeyup = (e: KeyboardEvent) => {
		if (e.code === 'Enter') handleClick();
	};

	const handleMouseEnter = () => {
		if ($isSelected || !$isPlaying) {
			$cursorStyle = 'play';
			return;
		}

		$cursorStyle = 'pause';
	};
</script>

{#if !$isLoading}
	<div
		class:playlists-browser-progress={true}
		class:active={$isPlaying}
		on:click={handleClick}
		on:keyup={handleKeyup}
		on:mouseenter={handleMouseEnter}
		on:mouseleave={() => ($cursorStyle = 'default')}
	>
		<div class:value={true}>
			<span class:placeholder={true}>00</span>
			{#key $activeIndex}
				<span
					class:current={true}
					in:fly={{ y: '-75%', duration: PLAYLISTS_BROWSER_TRANSITION_DURATION }}
					out:fly={{ y: '75%', duration: PLAYLISTS_BROWSER_TRANSITION_DURATION }}
				>
					{($activeIndex + 1).toString().padStart(2, '0')}
				</span>
			{/key}
		</div>
		<div class:bar={true}>
			{#key $activeIndex}
				<div class:fill={true} style="animation-duration: {PLAYLISTS_BROWSER_DISPLAY_DURATION}ms" />
			{/key}
		</div>
		<div class:value={true}>
			<span class:placeholder={true}>00</span>
			<span class:total={true}>
				{($playlists?.length || 0).toString().padStart(2, '0')}
			</span>
		</div>
	</div>
{/if}

<style lang="scss">
	.playlists-browser-progress {
		position: relative;
		display: flex;
		align-items: center;
		@include fluid(padding, 15, 40);
		@include fluid(margin, -15, -40);

		.value {
			position: relative;
			@include fluid(font-size, 14, 16);

			.current,
			.total {
				position: absolute;
				top: 0;
				color: var(--color-foreground-02);
			}

			.placeholder {
				opacity: 0;
				visibility: hidden;
			}

			.current {
				right: 0;
			}

			.total {
				left: 0;
			}
		}

		$browser-progress-bar-height: 2px;

		.bar {
			position: relative;
			@include fluid(width, 60, 80);
			height: $browser-progress-bar-height;
			background: var(--color-foreground-02);
			margin: 0 0.5rem;
		}

		&.active {
			.current {
				color: var(--color-foreground-01);
			}

			.bar {
				.fill {
					position: absolute;
					width: 0%;
					height: $browser-progress-bar-height;
					background: var(--color-foreground-01);
					animation: progressBarFill;
				}
			}
		}

		@keyframes progressBarFill {
			0% {
				width: 0%;
			}

			100% {
				width: 100%;
			}
		}
	}
</style>
