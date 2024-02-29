<script>
	export let data;
	$: ({ objets } = data);
</script>

<svelte:head>
	<title>Ateliers d'artisans - Objets</title>
	<meta name="description" content="Ateliers d'artisans" />
</svelte:head>


<section>

    <h1>Les Objets</h1>

    <ul>
        {#each objets.data as obj }
            <li><a href="/objets/{obj.id}">{obj.attributes?.CodeObjet}</a></li>
        {/each}
    </ul>
</section>


<style>
    
</style>


