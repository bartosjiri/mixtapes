<script>
	import { UmamiAnalytics } from '$util/umami-analytics';
	import { PageMeta } from '$util/meta';

	import { Preloader } from '$modules/preloader';
	import { Header, Footer } from '$lib/layout';
	import { Cursor } from '$modules/cursor';

	import '../styles/_global.scss';
</script>

<PageMeta />
<UmamiAnalytics />

<Preloader />
<Cursor />
<Header />
<main>
	<slot />
</main>
<Footer />
