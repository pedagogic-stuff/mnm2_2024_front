<script>
    import RichText from '$lib/Components/RichText.svelte';

    export let objet = '';
    export let manipulationDone = false;

    let displayMainCartel = true;

    $: ({  CarteZone, CartelSimple } = objet.attributes);

</script>



{#if !displayMainCartel}
    <button class="displayCartel" on:click={ () => displayMainCartel = true }>Afficher Cartel</button>
{/if}



<div class="cartel" class:hidden={!displayMainCartel}>

    <button class="close" on:click={ () => displayMainCartel = false }>
        <span >
            <svg width="43" height="43" viewBox="0 0 43 43" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M11.1797 32.1066L32.3929 10.8934" stroke="white" stroke-width="2" stroke-linecap="round"/>
                <path d="M32.3936 32.1066L11.1804 10.8934" stroke="white" stroke-width="2" stroke-linecap="round"/>
            </svg>
        </span>
    </button>

    <div class=titre-cartel>
        MANQUE CHAMPS DATA
    </div>

    <div class=sous-titre-cartel>
        MANQUE CHAMPS DATA
    </div>

    <div class=texte-cartel>
        {#if CartelSimple }
            <RichText blocks={CartelSimple} />
        {/if}
    </div>

    <div>
        {#if CarteZone }
            <img class="image-cartel" src="{CarteZone.data?.attributes?.url}" alt="">
        {/if}
    </div>
</div>


<div class="relative">
    <button on:click={ () => manipulationDone = true}>J'ai fini</button>
</div>


<style>

    .displayCartel {
        position : absolute;
        left : 90px;
        top : 170px;
    }
    .titre-cartel{
        padding: 20px 100px 0px 20px;
        font-size: 4.5rem;
        font-weight: bold;
    }
    .sous-titre-cartel{
        margin: 10px 20px 10px 20px;
        font-size: 3rem;
        line-height: 30px;
        font-weight: bold;
    }
    .texte-cartel{
        margin: 10px 20px 10px 20px;
        line-height: 25px;
        font-size: 25px;
    }
    .image-cartel {
        border-bottom-left-radius: 20px;
        border-bottom-right-radius: 20px;
        width: 100%;
    }
    .close {
        background: none;
        border: none;
        position: absolute;
        right: 20px;
        top: 26px;
    }

</style>