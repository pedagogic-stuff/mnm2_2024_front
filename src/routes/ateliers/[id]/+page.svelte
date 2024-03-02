<script>
    import ListeAteliers from '$lib/Components/ListeAteliers.svelte'
    import AtelierInformationsRaw from '$lib/Components/AtelierInformationsRaw.svelte'
    import ChoixObjet from '$lib/Components/ChoixObjet.svelte'


    export let data;
	$: ({ atelier, ateliers } = data);

    let step = -1;
    $: console.log('step: ', step);


    const launchSequence = () => {
        step += 1;
    }
    const resetSequence = () => {
        step = -1;
    }

</script>

<svelte:head>
	<title>Ateliers d'artisans - {atelier.data?.attributes?.nomArtisan}</title>
	<meta name="description" content="Ateliers d'artisans" />
</svelte:head>

    <button on:click={() => launchSequence() }>Launch sequence</button>
    <button on:click={() => resetSequence() }>Reset sequence</button>


    {#if step === -1}
        <AtelierInformationsRaw {atelier} />
    {:else if step === 0}
        <ChoixObjet reset={true} objets={atelier.data.attributes.objets} />
    {/if}



    <ListeAteliers {ateliers} />



    <style>

    .infos_container {
        width: 40vw;
        padding: 40px 0 100px;
    }
    </style>