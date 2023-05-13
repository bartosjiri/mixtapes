<script lang="ts">
	import { onMount } from 'svelte';

	const SCROLL_SPEED = 275;

	let windowWidth: number;
	let marqueeRef: HTMLElement;
	let titleRef: HTMLElement;

	let itemWidth = 0;
	let duration = 0;

	const setupMarquee = () => {
		if (!marqueeRef || !titleRef) return;

		itemWidth = titleRef.offsetWidth || 1;
		duration = itemWidth / SCROLL_SPEED;

		const clonesCount = Math.ceil(window.innerWidth / itemWidth);
		for (let i = 0; i < clonesCount; i++) {
			const clone = titleRef.cloneNode(true);
			if (!clone) return;
			marqueeRef?.appendChild(clone);
		}

		// @NOTE: Force animation
		marqueeRef?.style?.setProperty('animation-play-state', 'paused');
		setTimeout(() => {
			marqueeRef?.style?.setProperty('animation-play-state', 'running');
		}, 10);
	};

	onMount(() => {
		setupMarquee();

		// @TODO: The initial item's offsetWidth is incorrect; temp workaround:
		setTimeout(() => {
			setupMarquee();
		}, 1000);
	});
</script>

<svelte:window bind:innerWidth={windowWidth} on:resize={setupMarquee} />
<div
	bind:this={marqueeRef}
	class:marquee={true}
	style="
		--offset: {itemWidth}px; 
		--duration: {duration}s;
		animation-play-state: running;
	"
>
	<h2 bind:this={titleRef}>
		<slot />
	</h2>
</div>

<style lang="scss">
	.marquee {
		display: flex;
		animation-name: marquee;
		animation-duration: var(--duration);
		animation-timing-function: linear;
		animation-iteration-count: infinite;
		animation-play-state: running;
		will-change: transform;

		h2 {
			@include typography-font-02;
			@include fluid(font-size, 80, 160);
			line-height: 1;
			color: transparent;
			-webkit-text-stroke: 3px var(--color-foreground-01);
			background: inherit;
			background-clip: text;
			white-space: nowrap;
			@include fluid(padding-right, 125, 250);
		}

		&:hover {
			h2 {
				color: var(--color-foreground-01);
			}
		}

		@keyframes marquee {
			0% {
				transform: translate3d(0, 0, 0);
			}

			100% {
				transform: translate3d(calc(var(--offset) * -1), 0, 0);
			}
		}
	}
</style>
