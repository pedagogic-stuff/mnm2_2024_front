<script>
	import { page } from '$app/stores';  
    export let ateliers = '';
</script>


    {#if ateliers.data?.length > 0 }
        {#each ateliers.data as atelier }
            <a class="bouton-footer" href="/ateliers/{atelier?.id}" class:active={$page.url.pathname.includes(`/ateliers/${atelier?.id}`)}>{atelier.attributes?.nomArtisan}</a>
        {/each}
    {/if}



<style>
    .bouton-footer {
        text-decoration: none;
        color: white;
        font-size: 25px;
        font-family: "Zarid";
        border-radius: 20px;
        border-style: solid;
        border-color: #ffffff;
        border-width: 1px;
        padding: 10px 40px 10px 40px;
        margin-top: 25px;
        margin-right: 16px;
        display: flex;
        flex-direction: row;
        gap: 8px;
        align-items: center;
        justify-content: center;
        flex-shrink: 0;
        height: 35px;
        position: relative;
        overflow: hidden;
        text-align: center;
    }
    .active { 
        background-color: black;
    }
</style>