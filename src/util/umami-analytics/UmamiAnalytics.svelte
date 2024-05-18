<script lang="ts">
	import { env } from '$env/dynamic/public';
</script>

<svelte:head>
	{#if env.PUBLIC_UMAMI_URL && env.PUBLIC_UMAMI_WEBSITE_ID}
		<script
			async
			defer
			src={env.PUBLIC_UMAMI_URL}
			data-website-id={env.PUBLIC_UMAMI_WEBSITE_ID}
		></script>
	{/if}
</svelte:head>
