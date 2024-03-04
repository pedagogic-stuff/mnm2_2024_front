<script>
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
            <li>
				<a href="/ateliers/{atelier.id}">
					{atelier.attributes?.nomArtisan}
					<img src="{atelier.attributes?.Vignettepersonnage?.data?.attributes?.formats.small.url}" alt="">
				</a>
			</li>
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
	li {
		flex: 0 0 30%;
	}
</style>