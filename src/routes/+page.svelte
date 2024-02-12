<script>
	export let data;
	$: ({ ateliers } = data);
	$: console.log(ateliers)
</script>

<svelte:head>
	<title>Home</title>
	<meta name="description" content="Svelte demo app" />
</svelte:head>

<section>

		<!-- Import the component -->
	<script type="module" src="https://ajax.googleapis.com/ajax/libs/model-viewer/3.4.0/model-viewer.min.js"></script>

	<!-- Use it like any other HTML element -->
	<model-viewer alt="Neil Armstrong's Spacesuit from the Smithsonian Digitization Programs Office and National Air and Space Museum" src="https://res.cloudinary.com/diguckq2s/image/upload/v1707726695/Chair_6529739e5c.glb" shadow-intensity="1" camera-controls touch-action="pan-y"></model-viewer>

	{#each ateliers.data as atelier }
		<h2>{atelier.id} - {atelier.attributes?.NomArtisan}</h2>
	{/each}

</section>

<style>
model-viewer {
	width: 600px;
	height: 500px;
}
</style>
