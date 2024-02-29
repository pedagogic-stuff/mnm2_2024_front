<script>
    export let ateliers = '';

    $: console.log('ateliers: ', ateliers);

</script>


<ul>
    {#each ateliers.data as atelier }
        <li><a href="/ateliers/{atelier.id}">{atelier.attributes?.NomArtisan}</a></li>
    {/each}
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