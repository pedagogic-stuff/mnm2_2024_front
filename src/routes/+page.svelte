<script>
	import BlockArtisan from '../lib/Components/blocks/BlockArtisan.svelte';
	import BlockHomeIntro from '../lib/Components/blocks/BlockHomeIntro.svelte';

	export let data;
	$: ({ ateliers } = data);

	$:console.log('ateliers: ', ateliers)
</script>

<svelte:head>
	<title>Ateliers d'artisans - Accueil</title>
	<meta name="description" content="Ateliers d'artisans" />
</svelte:head>

<section>

	<BlockHomeIntro msg='Ici un message' />

    <ul>
        {#each ateliers.data as atelier }
			<BlockArtisan {atelier} />
        {/each}
    </ul>
    
</section>


<style>
	.homeIntro {
		border-radius: 20px;
		padding: 10px 20px;
		background-color: green;
		margin: 0 auto 40px auto;
		max-width: 600px;
		display: flex;
	}
	ul {
		display: flex;
		gap: 40px;
		flex-wrap: wrap;
	}

</style>