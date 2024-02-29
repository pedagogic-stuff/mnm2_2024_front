<script>
	export let data;
	$: ({ ateliers } = data);
</script>

<svelte:head>
	<title>Ateliers d'artisans - Accueil</title>
	<meta name="description" content="Ateliers d'artisans" />
</svelte:head>

<section>

    <ul>
        {#each ateliers.data as atelier }
            <li><a href="/ateliers/{atelier.id}">{atelier.attributes?.NomArtisan}</a></li>
        {/each}
    </ul>
    
</section>


<style>
	a {
		font-size: 20px;
		padding: 3px 0;
	}
</style>