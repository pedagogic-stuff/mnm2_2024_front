<script>
	import Header from '$lib/Components/Header.svelte'
	import Footer from '$lib/Components/Footer.svelte'
	import dev from '$lib/styles/dev.css';
	import prod from '$lib/styles/prod.css';
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


	@font-face {
		font-family: "Fedra";
		src: url("$lib/fonts/FedraSansPro-Bold.ttf");
	}
	
	@font-face {
		font-family: 'Zarid';
		src: url('$lib/fonts/ZaridSans-Regular.ttf')
	}
	@font-face {
		font-family: 'Zarid';
		font-weight : medium;
		src: url('$lib/fonts/ZaridSans-Medium.ttf');
	}

	@font-face {
		font-family: 'Zarid';
		font-weight : 300;
		src: url('$lib/fonts/ZaridSans-SemiBold.ttf');
	}

	main {
		width: 90%;
		margin: 60px auto;
	}
</style>