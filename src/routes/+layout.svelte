<script>
	import Header from '$lib/containers/Header/header.svelte';
	import '../app.pcss';
</script>

<!-- Blocking Small Size Devices -->
<div class="hidden sm:block">
	<Header />

	<main class="m-auto mt-10 max-w-screen-2xl">
		<slot />
	</main>
</div>

<!-- Message for small screen -->
<div class="block p-4 sm:hidden">
	<h1 class="m-auto mt-10 max-w-screen-2xl text-center text-4xl font-bold">
		Please use a larger device to view this page.
	</h1>
</div>
