<script>
	export let data;
	$: ({ ateliers } = data);
</script>

<svelte:head>
	<title>Ateliers d'artisans - Accueil</title>
	<meta name="description" content="Ateliers d'artisans" />
</svelte:head>

<section>

	{#each ateliers.data as atelier }
		<a href="/ateliers/{atelier.id}">{atelier.attributes?.nomArtisan}</a>
	{/each}

</section>


