<script>
    export let objets = []

</script>

<div>
    <h2>objets</h2>
    <ul>
        {#each objets.data as obj}
            <li>
                <a href="/objets/{obj.id}">
                    {obj.attributes?.nomObjet}
                </a>
            </li>
        {/each}
    </ul>
</div>