<script>
    import RichText from "$lib/Components/RichText.svelte";

    export let texte = '';
    export let titre = '';
    export let visuel = '';
    export let displayed = false;
</script>


<div class="cartel" class:hidden={!displayed}>

    <button class="close" on:click={ () => displayed = false }>
        <span >
            <svg width="43" height="43" viewBox="0 0 43 43" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M11.1797 32.1066L32.3929 10.8934" stroke="white" stroke-width="2" stroke-linecap="round"/>
                <path d="M32.3936 32.1066L11.1804 10.8934" stroke="white" stroke-width="2" stroke-linecap="round"/>
            </svg>
        </span>
    </button>

    <div class="titre-cartel">
        {titre}
    </div>

    <div class="sous-titre-cartel">
        MANQUE CHAMPS DATA
    </div>

    <div class=texte-cartel>
        {#if texte }
            <RichText blocks={texte} />
        {/if}
    </div>

    <div>
        {#if visuel }
            <img class="image-cartel" src="{visuel}" alt="">
        {/if}
    </div>
</div>


<style>

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