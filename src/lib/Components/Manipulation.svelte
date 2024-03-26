<script>
    import RichText from '$lib/Components/RichText.svelte';

    export let objet = '';
    export let manipulationDone = false;

    let displayMainCartel = true;

    $: ({  CarteZone, CartelSimple } = objet.attributes);

</script>


<h2>Manipulation</h2>


{#if !displayMainCartel}
    <button on:click={ () => displayMainCartel = true }>Afficher Cartel</button>
{/if}

<div class="cartel" class:hidden={!displayMainCartel}>

    <button on:click={ () => displayMainCartel = false }>Close</button>

    {#if CartelSimple }
        <RichText blocks={CartelSimple} />
    {/if}

    {#if CarteZone }
        <p><img src="{CarteZone.data?.attributes?.url}" alt=""></p>
    {/if}

</div>


<div class="relative">
    <button on:click={ () => manipulationDone = true}>J'ai fini</button>
</div>


<style>
    .cartel {
        padding: 20px;
        max-width: 400px;
        background-color: white;
        color: black;
    }
    .hidden {
        display: none;
    }
</style>