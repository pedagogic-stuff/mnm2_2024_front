<script>
	import Header from '$lib/Components/Header.svelte'
	import Footer from '$lib/Components/Footer.svelte'
</script>

<svelte:head>
	<link href="styles.css" rel="stylesheet" />
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