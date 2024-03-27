<script>
    import RichText from '$lib/Components/RichText.svelte';
    import Cartel from "$lib/Components/blocks/Cartel.svelte";

    export let objet = '';
    export let manipulationDone = false;

    let displayMainCartel = true;

    $: ({ CarteZone, CartelSimple } = objet.attributes);

</script>



{#if !displayMainCartel}
    <button class="displayCartel" on:click={ () => displayMainCartel = true }>
        <img src="/images/open.png" alt="open cartel">
    </button>
{/if}

<Cartel texte={CartelSimple} visuel={CarteZone} bind:displayed={displayMainCartel} />

<div class="relative">
    <button on:click={ () => manipulationDone = true}>J'ai fini</button>
</div>


<style>

    .displayCartel {
        position : fixed;
        left : 90px;
        top : 170px;
        background: none;
        border: none;
    }

</style>