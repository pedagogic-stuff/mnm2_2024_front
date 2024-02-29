<script>
    export let atelier = '';
    
    $: console.log('atelier: ', atelier);

</script>

<h1>{atelier.data?.attributes?.NomArtisan}</h1>

    <div>
        <h2>CouleurFond</h2>
        <p>{atelier.data?.attributes?.CouleurFond}</p>
    </div>


    <div>
        <h2>IllustrationAtelier</h2>
        <p><img src="{atelier.data?.attributes?.IllustrationAtelier?.data?.attributes?.formats.large.url}" alt=""></p>
    </div>


    <div>
        <h2>TextPresentation</h2> 
        <p>{atelier.data?.attributes?.TextPresentation}</p>
    </div>

	<div>
        <h2>objet_3_ds</h2>
        <ul>
            {#each atelier.data?.attributes?.objet_3_ds.data as obj}
                <li>
                    <a href="/objets/{obj.id}">{obj.attributes?.CodeObjet}</a> - {obj.attributes?.CartelSimple} - {obj.attributes?.CoordonnesObjet}</li>
            {/each}
        </ul>
    </div>