<script>
	export let data;
	$: ({ ateliers } = data);
</script>

<svelte:head>
	<title>Ateliers d'artisans - Ateliers</title>
	<meta name="description" content="Ateliers d'artisans" />
</svelte:head>


<section>

    <h1>Les Ateliers</h1>

    <ul>
        {#each ateliers.data as atelier }
            <li><a href="/ateliers/{atelier.id}">{atelier.attributes?.nomArtisan}</a></li>
        {/each}
    </ul>
    
</section>


<style>
    
</style>


