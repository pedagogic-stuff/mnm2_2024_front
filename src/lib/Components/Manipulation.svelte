<script>
    import RichText from '$lib/Components/RichText.svelte';
    import Cartel from "$lib/Components/blocks/Cartel.svelte";
	import BlockHomeIntro from '$lib/Components/blocks/BlockHomeIntro.svelte';

    export let objet = '';
    export let manipulationDone = false;

    let displayMainCartel = true;

    $: ({ CarteZone, CartelSimple } = objet.attributes);
    $: console.log("objet.attributes: ", objet.attributes)

</script>



{#if !displayMainCartel}
    <button class="displayCartel" on:click={ () => displayMainCartel = true }>
        <img src="/images/open.png" alt="open cartel">
    </button>
{/if}


<BlockHomeIntro msg={objet.attributes.consignePOI} />


<Cartel titre={objet.attributes.nomObjet} texte={CartelSimple} visuel={CarteZone.data.attributes.url} bind:displayed={displayMainCartel} />

<!-- <div class="relative">
    <button on:click={ () => manipulationDone = true}>J'ai fini</button>
</div> -->


<style>

    .displayCartel {
        position : fixed;
        left : 90px;
        top : 170px;
        background: none;
        border: none;
    }

</style>