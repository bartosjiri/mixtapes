<script>
	import { FathomAnalytics } from '$util/fathom-analytics';
	import { PageMeta } from '$util/meta';

	import { Header, Footer } from '$lib/layout';
	import { Cursor } from '$modules/cursor';

	import '../styles/_global.scss';
</script>

<FathomAnalytics />
<PageMeta />

<Cursor />
<Header />
<main>
	<slot />
</main>
<Footer />
