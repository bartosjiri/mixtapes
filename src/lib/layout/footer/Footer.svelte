<script lang="ts">
	import { PlaylistsBrowserProgress } from '$modules/playlists-browser';
	import { cursorStyle } from '$modules/cursor';

	import { CONFIG_USER } from '$config';

	import SpotifyLogo from './spotify.svg?raw';
</script>

<footer>
	<div class:container={true}>
		<div class:progress={true}>
			<PlaylistsBrowserProgress />
		</div>
		<a
			class:spotify={true}
			href="https://open.spotify.com/user/{CONFIG_USER.id}"
			target="_blank"
			on:mouseenter={() => ($cursorStyle = 'arrow')}
			on:mouseleave={() => ($cursorStyle = 'default')}
		>
			{@html SpotifyLogo}
		</a>
	</div>
</footer>

<style lang="scss">
	footer {
		position: fixed;
		bottom: 0;
		left: 0;
		right: 0;
		padding: var(--wrapper-padding-y) var(--wrapper-padding-x);
		pointer-events: none;
		z-index: 1000;

		.container {
			display: grid;
			align-items: center;
			grid-template-columns: 1fr 1fr;

			.progress,
			.spotify {
				display: flex;
				@include fluid(padding, 15, 40);
				@include fluid(margin, -15, -40);
				pointer-events: all;
			}

			.progress {
				justify-self: flex-start;
			}

			.spotify {
				justify-self: flex-end;

				:global(svg) {
					@include fluid(height, 16, 24);
					@include fluid(width, 16, 24);
					fill: var(--color-foreground-02);
					transition: fill var(--transition-duration-01) var(--transition-function-01);
				}

				&:hover {
					:global(svg) {
						fill: #65d46e;
					}
				}
			}
		}
	}
</style>
