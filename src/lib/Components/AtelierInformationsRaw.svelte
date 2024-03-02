<script>
    export let atelier = '';
    
    $: console.log('atelier: ', atelier);

</script>

<h1>{atelier.data?.attributes?.nomArtisan}</h1>

    <div>
        <h2>CodeCouleur</h2>
        <p>{atelier.data?.attributes?.CodeCouleur}</p>
    </div>


    <div>
        <h2>illustrationAtelier</h2>
        <p><img src="{atelier.data?.attributes?.illustrationAtelier?.data?.attributes?.formats.large.url}" alt=""></p>
    </div>

    <div>
        <h2>illustrationArtisan</h2>
        <p><img src="{atelier.data?.attributes?.illustrationArtisan?.data?.attributes?.formats.large.url}" alt=""></p>
    </div>

    <div>
        <h2>Vignettepersonnage</h2>
        <p><img src="{atelier.data?.attributes?.Vignettepersonnage?.data?.attributes?.formats.large.url}" alt=""></p>
    </div>

    

    <div>
        <h2>TextPresentation</h2> 
        <p>{atelier.data?.attributes?.Textepresentation}</p>
    </div>

	<div>
        <h2>objet_3_ds</h2>
        <ul>
            {#each atelier.data?.attributes?.objets.data as obj}
                <li>
                    <a href="/objets/{obj.id}">{obj.attributes?.CodeObjet}</a> - {obj.attributes?.CartelSimple} - {obj.attributes?.CoordonnesObjet}</li>
            {/each}
        </ul>
    </div>