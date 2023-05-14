<script lang="ts">
	import {
		playlists,
		activeIndex,
		isSelected,
		PLAYLISTS_BROWSER_TRANSITION_DURATION
	} from '$modules/playlists-browser';

	import { addClassName } from '$util/transition';

	import NavigationArrowIcon from './navigationArrow.svg?raw';

	const handleClick = (modifier: -1 | 1) => {
		if (!$playlists?.length) return;

		if ($activeIndex + modifier < 0) {
			$activeIndex = $playlists?.length - 1;
			return;
		}

		if ($activeIndex + modifier > $playlists?.length - 1) {
			$activeIndex = 0;
			return;
		}

		$activeIndex += modifier;
	};

	const handleKeyPress = (e: KeyboardEvent) => {
		if (e.key === 'ArrowLeft') handleClick(-1);
		if (e.key === 'ArrowRight') handleClick(1);
	};
</script>

<div class:playlist-detail-navigation={true}>
	{#if $isSelected}
		<div
			class:container={true}
			in:addClassName={{ duration: PLAYLISTS_BROWSER_TRANSITION_DURATION + 300 }}
			out:addClassName={{ duration: PLAYLISTS_BROWSER_TRANSITION_DURATION }}
			style="--animation-duration: {PLAYLISTS_BROWSER_TRANSITION_DURATION}ms;"
		>
			<div class:previous={true} on:click={() => handleClick(-1)} on:keypress={handleKeyPress}>
				{@html NavigationArrowIcon}
			</div>
			<div class:next={true} on:click={() => handleClick(1)} on:keypress={handleKeyPress}>
				{@html NavigationArrowIcon}
			</div>
		</div>
	{/if}
</div>

<style lang="scss">
	.playlist-detail-navigation {
		position: fixed;
		top: 0;
		bottom: 0;
		left: 0;
		right: 0;
		pointer-events: none;
		z-index: 500;

		.container {
			position: absolute;
			top: 0;
			bottom: 0;
			left: 0;
			right: 0;

			.previous,
			.next {
				position: absolute;
				top: 0;
				bottom: 0;
				@include fluid(width, 45, 120);
				display: flex;
				flex-direction: column;
				justify-content: center;
				align-items: center;
				pointer-events: auto;

				:global(svg) {
					display: inline-block;
					@include fluid(height, 45, 100);
					@include fluid(width, 45, 100);
					fill: none;
					stroke: var(--color-foreground-02);
					stroke-width: 10px;
				}
			}

			.previous {
				left: 0;
			}

			.next {
				right: 0;

				:global(svg) {
					transform: rotate(180deg);
				}
			}

			&:global(.entering) {
				:global(.previous) {
					transform: translateX(-100%);
					animation: detailNavigationPreviousEntering;
					animation-duration: var(--animation-duration);
					animation-delay: 0.3s;
					animation-fill-mode: forwards;
				}

				:global(.next) {
					transform: translateX(100%);
					animation: detailNavigationNextEntering;
					animation-duration: var(--animation-duration);
					animation-delay: 0.3s;
					animation-fill-mode: forwards;
				}
			}

			&:global(.leaving) {
				:global(.previous),
				:global(.next) {
					animation: detailNavigationLeaving;
					animation-duration: var(--animation-duration);
					animation-fill-mode: forwards;
				}
			}

			@keyframes detailNavigationPreviousEntering {
				0% {
					transform: translateX(-100%);
				}

				100% {
					transform: translateX(0);
				}
			}

			@keyframes detailNavigationNextEntering {
				0% {
					transform: translateX(100%);
				}

				100% {
					transform: translateX(0);
				}
			}

			@keyframes detailNavigationLeaving {
				0% {
					opacity: 1;
				}

				50%,
				100% {
					opacity: 0;
				}
			}
		}
	}
</style>
