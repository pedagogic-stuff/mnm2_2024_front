<script>
	import BlockArtisan from '../lib/Components/blocks/BlockArtisan.svelte';

	export let data;
	$: ({ ateliers } = data);

	$:console.log('ateliers: ', ateliers)
</script>

<svelte:head>
	<title>Ateliers d'artisans - Accueil</title>
	<meta name="description" content="Ateliers d'artisans" />
</svelte:head>

<section>

    <ul>
        {#each ateliers.data as atelier }
			<BlockArtisan {atelier} />
        {/each}
    </ul>
    
</section>


<style>
	a {
		font-size: 20px;
		padding: 3px 0;
		display: flex;
		gap: 20px;
		flex-direction: column;
		align-items: center;
		justify-content: center;
	}
	ul {
		display: flex;
		gap: 40px;
		flex-wrap: wrap;
	}

</style>