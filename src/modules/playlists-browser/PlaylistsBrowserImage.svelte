<script lang="ts">
	import { currentPlaylist, isSelected } from './playlistsBrowser.store';

	import { PLAYLISTS_BROWSER_TRANSITION_DURATION } from './playlistsBrowser.constants';
</script>

<div class:playlists-browser-image={true}>
	<div class:container={true}>
		{#if !$isSelected}
			<div class:image={true}>
				<img src={$currentPlaylist?.imageUrl} alt="" />
			</div>
		{/if}
	</div>
	<svg>
		<filter id="imageFilter" x="0%" y="0%" width="100%" height="100%">
			<feTurbulence type="fractalNoise" baseFrequency="0.1" result="feTurb">
				<animate
					attributeName="baseFrequency"
					values="0.1 0.1; 0.1 0.15"
					dur={`${PLAYLISTS_BROWSER_TRANSITION_DURATION}s`}
					repeatCount="indefinite"
				/>
			</feTurbulence>
			<feDisplacementMap in="SourceGraphic" in2="feTurb" scale="20" result="feDisplMap" />
		</filter>
	</svg>
</div>

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

				img {
					display: block;
					width: 100%;
				}
			}
		}

		svg {
			position: absolute;
		}
	}
</style>
