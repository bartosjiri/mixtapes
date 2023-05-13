<script>
	import { FathomAnalytics } from '$util/fathom-analytics';
	import { PageMeta } from '$util/meta';

	import { Header, Footer } from '$lib/layout';

	import '../styles/_global.scss';
</script>

<FathomAnalytics />
<PageMeta />

<Header />
<main>
	<slot />
</main>
<Footer />
