<script lang="ts">
	import {
		currentPlaylist,
		activeIndex,
		isLoading,
		isSelected,
		PLAYLISTS_BROWSER_TRANSITION_DURATION
	} from '$modules/playlists-browser';

	import { addClassName } from '$util/transition';
</script>

{#if !$isLoading}
	<div class:playlist-detail-image={true}>
		<div class:container={true}>
			{#if $isSelected}
				{#key $activeIndex}
					<div
						class:image={true}
						transition:addClassName={{
							duration: PLAYLISTS_BROWSER_TRANSITION_DURATION
						}}
					>
						<img
							src={$currentPlaylist?.imageUrl}
							alt=""
							style="animation-duration: {PLAYLISTS_BROWSER_TRANSITION_DURATION}ms;"
						/>
					</div>
				{/key}
			{/if}
		</div>
	</div>
{/if}

<style lang="scss">
	.playlist-detail-image {
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

				$transition-playlist: cubic-bezier(0.645, 0.045, 0.355, 1);

				img {
					display: block;
					width: 100%;
					opacity: 0.33;
					animation: detailImageEntering;
					animation-timing-function: $transition-playlist;
					animation-fill-mode: forwards;
				}

				&:global(.leaving) {
					:global(img) {
						animation: detailImageLeaving;
						animation-play-state: running;
					}
				}

				@keyframes detailImageEntering {
					0%,
					33% {
						transform: scale(1);
						opacity: 1;
					}

					66% {
						filter: url(#imageFilter);
					}

					100% {
						transform: scale(0.75);
					}
				}

				@keyframes detailImageLeaving {
					0% {
						transform: scale(0.75);
					}

					100% {
						opacity: 0;
						transform: scale(0.75);
					}
				}
			}
		}
	}
</style>
