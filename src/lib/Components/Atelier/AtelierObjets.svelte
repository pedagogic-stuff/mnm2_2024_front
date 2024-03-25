<script>
    export let objets = []

    $: console.log('[AtelierObjets] objets: ', objets)
    $: console.log('[visuelObjet2d] objets: ', objets.data[0].attributes.visuelObjet2d.data[0].attributes.url)

</script>

<div>
    {#each objets.data as obj}
            <div>
                <a href="/objets/{obj.id}">
                    {#if obj.attributes?.visuelObjet2d.data }
                        {#each obj.attributes?.visuelObjet2d.data as visuel}
                            <img src="{visuel.attributes.url}" alt="{obj.attributes?.nomObjet}"> 
                        {/each}
                    {/if}
                </a>
            </div>
    {/each}
</div>