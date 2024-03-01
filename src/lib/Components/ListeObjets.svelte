<script>
    export let objets = '';

</script>


<ul>
    {#each objets.data as obj }
        <li><a href="/objets/{obj.id}">{obj.attributes?.CodeObjet}</a></li>
    {/each}
</ul>


<style>
    ul {
        position: fixed;
        z-index: 2;
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