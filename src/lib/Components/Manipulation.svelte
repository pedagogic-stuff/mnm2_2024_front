<script>
    import ModelViewer from '$lib/Components/ModelViewer.svelte';
    import RichText from '$lib/Components/RichText.svelte';

    export let objet = '';
    export let manipulationDone = false;

    let displayMainCartel = true;

    $: ({ nomObjet, CodeObjet, CarteZone, visuelObjet2d, qcms, POI, CoordonneesCamera, Fichier3d, CartelSimple } = objet.attributes);

    $: console.log('objet.POI', objet.POI)
</script>


<h2>Manipulation</h2>


{#if !displayMainCartel}
    <button on:click={ () => displayMainCartel = true }>Afficher Cartel</button>
{/if}

<div class="cartel" class:hidden={!displayMainCartel}>

    <button on:click={ () => displayMainCartel = false }>Close</button>

    <h2>Cartel principal</h2>

    {#if CarteZone }
        <p><img src="{CarteZone.data?.attributes?.url}" alt=""></p>
    {/if}

    {#if CartelSimple }
        <RichText blocks={CartelSimple} />
    {/if}

</div>


<div class="relative">
    <button on:click={ () => manipulationDone = true}>J'ai fini</button>
</div>


<style>
    .cartel {
        border: 1px solid;
        padding: 20px;
        max-width: 400px;
    }
    .hidden {
        display: none;
    }
</style>