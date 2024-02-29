<script>
	export let data;
	$: ({ atelier } = data);

</script>

<svelte:head>
	<title>Ateliers d'artisans - {atelier.attributes.NomArtisan}</title>
	<meta name="description" content="Ateliers d'artisans" />
</svelte:head>

    <h1>{atelier.attributes.NomArtisan}</h1>

