<script lang="ts">
	import { isLoading } from '$modules/preloader';
	import {
		currentPlaylist,
		activeIndex,
		isSelected,
		PLAYLISTS_BROWSER_TRANSITION_DURATION
	} from '$modules/playlists-browser';
	import { cursorStyle } from '$modules/cursor';

	import { addClassName } from '$util/transition';

	import SpotifyLogo from '$lib/layout/footer/spotify.svg?raw';
</script>

{#if !$isLoading}
	<div class:playlist-detail-content={true}>
		<div class:container={true}>
			{#if $isSelected}
				{#key $activeIndex}
					<div
						class:content={true}
						in:addClassName={{
							duration: PLAYLISTS_BROWSER_TRANSITION_DURATION + 300
						}}
						out:addClassName={{
							duration: PLAYLISTS_BROWSER_TRANSITION_DURATION
						}}
						style="--animation-duration: {PLAYLISTS_BROWSER_TRANSITION_DURATION}ms;"
					>
						<div class:title={true}>
							<div class:placeholder={true}>{$currentPlaylist?.name}</div>
							{#each { length: 3 } as _}
								<span>{$currentPlaylist?.name}</span>
							{/each}
						</div>
						<div class:meta={true}>
							<span>{$currentPlaylist?.genre}</span>
							<span>{$currentPlaylist?.tracksCount} tracks</span>
						</div>
						<div class:artists={true}>
							{#each $currentPlaylist?.artists || [] as artist}
								<span>{artist}</span>
							{/each}
						</div>
						<div class:action={true}>
							<a
								href="https://open.spotify.com/playlist/{$currentPlaylist?.id}"
								target="_blank"
								on:mouseenter={() => ($cursorStyle = 'enter')}
								on:mouseleave={() => ($cursorStyle = 'default')}
							>
								<div class:link={true}>
									{@html SpotifyLogo}
									<span>Play now</span>
								</div>
							</a>
						</div>
					</div>
				{/key}
			{/if}
		</div>
	</div>
{/if}

<style lang="scss">
	.playlist-detail-content {
		position: absolute;
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
			@include fluid(padding-left, 30, 480);
			@include fluid(padding-right, 30, 480);

			.content {
				position: absolute;
				top: 0;
				bottom: 0;
				left: 0;
				right: 0;
				display: flex;
				flex-direction: column;
				justify-content: center;
				align-items: center;
				color: inherit;
				z-index: 100;

				$title-font-size-min: 50;
				$title-font-size-max: 100;

				.title {
					position: relative;
					display: flex;
					word-break: break-word;
					hyphens: auto;

					.placeholder,
					span {
						position: absolute;
						top: 0;
						left: 0;
						right: 0;
						@include typography-font-02;
						@include fluid(font-size, $title-font-size-min, $title-font-size-max);
						line-height: 1;
						text-align: center;
						color: transparent;
						-webkit-text-stroke: 2px var(--color-foreground-01);
					}

					span {
						&:first-of-type {
							color: rgba($color-background-01, 0.66);
						}
					}

					.placeholder {
						position: relative;
						opacity: 0;
						visibility: hidden;
					}
				}

				.meta {
					display: flex;
					justify-content: center;
					@include fluid(margin-top, 20, 40);

					span {
						@include fluid(font-size, 16, 22);
						@include fluid(margin-right, 40, 80);

						&:last-of-type {
							margin-right: 0;
						}
					}
				}

				.artists {
					text-align: center;
					@include fluid(margin-top, 20, 40);

					span {
						display: inline-block;
						@include fluid(font-size, 14, 18);
						@include fluid(margin-right, 25, 50);

						&:last-of-type {
							margin-right: 0;
						}
					}
				}

				.action {
					@include fluid(margin-top, 20, 40);
					animation-duration: var(--animation-duration);

					a {
						display: flex;
						padding: 0.5rem;

						.link {
							display: flex;
							align-items: center;
							padding: #{fluid(6, 10)} #{fluid(12, 20)};
							border: 2px solid var(--color-foreground-02);
							background: rgba($color-background-01, 0.66);
							transition: border var(--transition-duration-01) var(--transition-function-01);

							:global(svg) {
								@include fluid(height, 14, 16);
								@include fluid(width, 14, 16);
								fill: var(--color-foreground-01);
								margin-right: 1rem;
							}

							span {
								@include fluid(font-size, 16, 18);
								color: var(--color-foreground-01);
							}
						}

						&:hover {
							.link {
								border: 2px solid var(--color-foreground-01);
							}
						}
					}
				}

				&:global(.entering) {
					:global(.title) {
						:global(span) {
							animation: detailTitleEntering;
							animation-duration: var(--animation-duration);
							animation-fill-mode: forwards;

							transform: translateY(#{fluid($title-font-size-min * 2, $title-font-size-max * 2)});
							opacity: 0;

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

					:global(.meta),
					:global(.artists),
					:global(.action) {
						animation: detailContentEntering;
						animation-duration: var(--animation-duration);
						animation-fill-mode: forwards;
						animation-delay: 0.3s;
						transform: translateY(#{fluid($title-font-size-min * 2, $title-font-size-max * 2)});
						opacity: 0;
					}
				}

				&:global(.leaving) {
					:global(.title) {
						:global(span) {
							animation: detailTitleLeaving;
							animation-duration: var(--animation-duration);
							animation-fill-mode: forwards;
						}
					}

					:global(.meta),
					:global(.artists),
					:global(.action) {
						animation: detailContentLeaving;
						animation-duration: var(--animation-duration);
						animation-fill-mode: forwards;
					}

					@keyframes detailTitleEntering {
						0% {
							transform: translateY(#{fluid($title-font-size-min * 2, $title-font-size-max * 2)});
							opacity: 0;
						}

						100% {
							transform: translateY(0);
							opacity: 1;
						}
					}

					@keyframes detailTitleLeaving {
						0% {
							opacity: 1;
						}

						50%,
						100% {
							opacity: 0;
						}
					}

					@keyframes detailContentEntering {
						0% {
							transform: translateY(#{fluid($title-font-size-min * 2, $title-font-size-max * 2)});
							opacity: 0;
						}

						100% {
							transform: translateY(0);
							opacity: 1;
						}
					}

					@keyframes detailContentLeaving {
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
		}
	}
</style>
