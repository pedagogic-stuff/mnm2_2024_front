<script>
	import Header from '$lib/Components/Header.svelte'
	import Footer from '$lib/Components/Footer.svelte'
	import dev from '$lib/styles/dev.css?inline';
	import prod from '$lib/styles/prod.css?inline';
</script>

<svelte:head>
	<link href="{dev}" rel="stylesheet" />
	<link href="{prod}" rel="stylesheet" />
</svelte:head>

<div class="app">

	<Header />
	
	<main>
		<slot />
	</main>

	<Footer />

</div>


<style>
	main {
		max-width: 1000px;
		width: 90%;
		margin: 60px auto;
	}
</style>