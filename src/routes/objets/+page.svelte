<script>
	export let data;
	$: ({ objets } = data);

    $: console.log('objets: ', objets)
</script>

<svelte:head>
	<title>Ateliers d'artisans - Objets</title>
	<meta name="description" content="Ateliers d'artisans" />
</svelte:head>


<section>

    <h1>Les Objets</h1>

    <ul>
        {#each objets.data as obj }
            <li><a href="/objets/{obj.id}">{obj.attributes?.nomObjet}</a></li>
        {/each}
    </ul>
</section>


<style>
    
</style>


