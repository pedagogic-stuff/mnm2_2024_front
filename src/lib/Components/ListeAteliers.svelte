<script>
    export let ateliers = '';
</script>


<ul>
    {#if ateliers.data?.length > 0 }
        {#each ateliers.data as atelier }
            <li><a href="/ateliers/{atelier?.id}">{atelier.attributes?.NomArtisan}</a></li>
        {/each}
    {/if}
</ul>


<style>
    ul {
        position: fixed;
        bottom: 20px;
        left: 20px;
        background: red;
        color: white;
        display: flex;
        gap: 20px;
        list-style: none;
        padding: 10px;
        margin: 0;
    }
    a {
        color: white;
    }
</style>