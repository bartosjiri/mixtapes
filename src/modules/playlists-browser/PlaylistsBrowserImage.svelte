<script lang="ts">
	import { addClassName } from '$util/transition';

	import { currentPlaylist, isLoading, isSelected } from './playlistsBrowser.store';

	import { PLAYLISTS_BROWSER_TRANSITION_DURATION } from './playlistsBrowser.constants';
</script>

{#if !$isLoading}
	<div class:playlists-browser-image={true}>
		<div class:container={true}>
			{#key [$currentPlaylist, $isSelected]}
				<div
					class:image={true}
					transition:addClassName={{
						duration: PLAYLISTS_BROWSER_TRANSITION_DURATION
					}}
				>
					{#if !$isSelected}
						<img
							src={$currentPlaylist?.imageUrl}
							alt=""
							style="animation-duration: {PLAYLISTS_BROWSER_TRANSITION_DURATION}ms;"
						/>
					{/if}
				</div>
			{/key}
		</div>
		<svg>
			<filter id="imageFilter" x="0%" y="0%" width="100%" height="100%">
				<feTurbulence type="fractalNoise" baseFrequency="0.1" result="feTurb">
					<animate
						attributeName="baseFrequency"
						values="0.1 0.1; 0.1 0.15"
						dur={`${PLAYLISTS_BROWSER_TRANSITION_DURATION}ms`}
						repeatCount="indefinite"
					/>
				</feTurbulence>
				<feDisplacementMap in="SourceGraphic" in2="feTurb" scale="20" result="feDisplMap" />
			</filter>
		</svg>
	</div>
{/if}

<style lang="scss">
	.playlists-browser-image {
		position: fixed;
		top: 0;
		bottom: 0;
		left: 0;
		right: 0;
		display: flex;
		flex-direction: column;
		justify-content: center;
		align-items: center;
		z-index: 10;

		.container {
			position: relative;
			width: 100vmin;
			height: 100vh;

			.image {
				position: absolute;
				top: 0;
				bottom: 0;
				left: 0;
				right: 0;
				display: flex;
				flex-direction: column;
				justify-content: center;
				@include fluid(padding, 40, 100);
				overflow: hidden;

				$transition-playlist: cubic-bezier(0.645, 0.045, 0.355, 1);

				img {
					display: block;
					width: 100%;
					animation-timing-function: $transition-playlist;
					animation-fill-mode: forwards;
				}

				&:global(.entering) {
					:global(img) {
						animation: browserImageEntering;
						animation-play-state: running;
					}
				}

				&:global(.leaving) {
					:global(img) {
						animation: browserImageLeaving;
						animation-play-state: running;
					}
				}

				@keyframes browserImageEntering {
					0% {
						opacity: 0;
						transform: translateY(-10%);
						filter: url(#imageFilter);
					}

					100% {
						transform: translateY(0);
						opacity: 1;
					}
				}

				@keyframes browserImageLeaving {
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

		svg {
			position: absolute;
		}
	}
</style>
