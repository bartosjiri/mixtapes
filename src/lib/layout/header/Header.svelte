<script lang="ts">
	import { activeIndex, isSelected, startPlayback, stopPlayback } from '$modules/playlists-browser';
	import { cursorStyle } from '$modules/cursor';

	import BartosjiriLogo from './bartosjiri.svg?raw';

	const handleClick = () => {
		if ($activeIndex === 0 && !$isSelected) return;

		$activeIndex = 0;
		$isSelected = false;
		stopPlayback();
		startPlayback();
	};

	const handleKeyUp = (e: KeyboardEvent) => {
		if (e.code === 'Enter') handleClick();
	};
</script>

<header>
	<div class:container={true}>
		<div
			class:logo={true}
			on:click={handleClick}
			on:keyup={handleKeyUp}
			on:mouseenter={() => ($cursorStyle = 'arrow')}
			on:mouseleave={() => ($cursorStyle = 'default')}
		>
			<span>Mixtapes</span>
		</div>
		<a
			class:author={true}
			href="https://bartosjiri.com"
			target="_blank"
			on:mouseenter={() => ($cursorStyle = 'arrow')}
			on:mouseleave={() => ($cursorStyle = 'default')}
		>
			{@html BartosjiriLogo}
		</a>
	</div>
</header>

<style lang="scss">
	header {
		position: fixed;
		top: 0;
		left: 0;
		right: 0;
		padding: var(--wrapper-padding-y) var(--wrapper-padding-x);
		pointer-events: none;
		z-index: 1000;

		.container {
			display: grid;
			align-items: center;
			grid-template-columns: 1fr 1fr;

			.logo,
			.author {
				display: flex;
				@include fluid(padding, 15, 40);
				@include fluid(margin, -15, -40);
				pointer-events: all;
			}

			.logo {
				justify-self: flex-start;

				span {
					font-size: fluid(18, 24);
				}
			}

			.author {
				justify-self: flex-end;

				:global(svg) {
					@include fluid(height, 24, 34);
					@include fluid(width, 24, 34);
					fill: var(--color-foreground-02);
					transition: fill var(--transition-duration-01) var(--transition-function-01);
				}

				&:hover {
					:global(svg) {
						fill: #fb4248;
					}
				}
			}
		}
	}
</style>
