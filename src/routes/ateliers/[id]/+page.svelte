<script>
    import ListeAteliers from '$lib/Components/ListeAteliers.svelte'
    import AtelierInformationsRaw from '$lib/Components/AtelierInformationsRaw.svelte'
    import ChoixObjet from '$lib/Components/ChoixObjet.svelte'
    import AtelierObjets from '$lib/Components/Atelier/AtelierObjets.svelte';

    export let data;
	$: ({ atelier, ateliers } = data);
    $: ({ nomArtisan, CodeCouleur, illustrationAtelier, illustrationArtisan, Vignettepersonnage, Textepresentation, objets } = atelier.data.attributes);

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


    <img class="atelierBg" src="{atelier.data.attributes.illustrationAtelier?.data.attributes.url}" alt="">

    <div class="atelierContent">

        <div>
            <button on:click={() => launchSequence() }>Launch sequence</button>
            <button on:click={() => resetSequence() }>Reset sequence</button>
        </div>


        <div class="cols">

            <div class="leftCol">
                {#if step === -1}
                    <AtelierInformationsRaw {atelier} />
                {:else if step === 0}
                    <ChoixObjet reset={true} objets={atelier.data.attributes.objets} />
                {/if}
            </div>

            <div class="rightCol">
                <AtelierObjets {objets} />
            </div>
        </div>
        
    </div>


<style>
    .atelierBg {
        position: fixed;
        z-index: 1;
        top: 0;
        bottom: 0;
        right: 0;
        left: 0;
        width: 100%;
        height: 100%;
        filter:brightness(.7)
    }
    .atelierContent {
        position: relative;
        z-index: 2;
        color: white;
    }
    .cols {
        display: flex;
    }
    .leftCol {
        width: 70%;
    }
    .rightCol {
        width: 30%;
    }  
</style>
