<script>
    import RichText from "$lib/Components/RichText.svelte";

    export let texte = '';
    export let titre = '';
    export let visuel = '';
    export let CheminAtelier = '';
    export let displayed = false;
    export let closeable = true;

    $: console.log('CheminAtelier', CheminAtelier)
</script>


<div class="cartel" class:hidden={!displayed}>

    {#if closeable}
        <button class="close" on:click={ () => displayed = false }>
            <span >
                <svg width="43" height="43" viewBox="0 0 43 43" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M11.1797 32.1066L32.3929 10.8934" stroke="white" stroke-width="2" stroke-linecap="round"/>
                    <path d="M32.3936 32.1066L11.1804 10.8934" stroke="white" stroke-width="2" stroke-linecap="round"/>
                </svg>
            </span>
        </button>
    {/if}

    {#if CheminAtelier !== '' }
        <div class="surtitre-cartel">
            {CheminAtelier}
        </div>
    {/if}

    <div class="titre-cartel">
        {titre}
    </div>

    <div class=texte-cartel>
        {#if texte }
            <RichText blocks={texte} />
        {/if}
    </div>

    <div class="image-cartel-container">
        {#if visuel }
            <img class="image-cartel" src="{visuel}" alt="">
        {/if}
    </div>
</div>


<style>

    .surtitre-cartel {
        font-size: 2.5rem;
        padding: 35px 35px 0 35px;
    }
    .titre-cartel{
        padding: 30px 35px 30px 35px;
        font-size: 4.5rem;
        font-weight: bold;
        line-height: 1;
    }
    .texte-cartel{
        margin: 10px 35px 10px 35px;
        line-height: 25px;
        font-size: 25px;
        overflow-y: scroll;
        height: calc(100% - 600px);
        padding-bottom: 100px;

        -ms-overflow-style: none;  /* IE and Edge */
        scrollbar-width: none;  /* Firefox */
    }
     /* Hide scrollbar for Chrome, Safari and Opera */
    .texte-cartel::-webkit-scrollbar {
    display: none;
    }

    .image-cartel-container {
        position: absolute;
        bottom: 0;
        left: 0;
        right: 0;
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