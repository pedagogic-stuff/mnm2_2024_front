<script>
    export let objets = []

    $: console.log('[AtelierObjets] objets: ', objets)

</script>

<div>
    <ul>
        {#each objets.data as obj}
            <li>
                <a href="/objets/{obj.id}">
                    {obj.attributes?.nomObjet}

                    <!-- TODO: Ajout image !
                        <img src="{obj.attributes.visuelObjet2d?.data[0]?.attributes?.url}" alt=""> -->
                </a>
            </li>
        {/each}
    </ul>
</div>