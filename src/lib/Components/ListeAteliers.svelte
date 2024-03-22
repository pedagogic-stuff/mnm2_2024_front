<script>
    export let ateliers = '';
</script>


<ul>
    {#if ateliers.data?.length > 0 }
        {#each ateliers.data as atelier }
            <li><a class="button" href="/ateliers/{atelier?.id}" class:active={atelier.id === 4}>{atelier.attributes?.nomArtisan}</a></li>
        {/each}
    {/if}
</ul>


<style>
    ul {
        position: fixed;
        z-index: 2;
        bottom: 20px;
        left: 20px;
        color: white;
        display: flex;
        gap: 20px;
        list-style: none;
        padding: 10px;
        margin: 0;
    }
    a {
        color: white;
        font-size: 20px;
    }
    .active { 
        background-color: black;
    }
</style>