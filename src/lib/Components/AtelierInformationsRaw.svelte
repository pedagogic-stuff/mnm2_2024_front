<script>
    import RichText from '$lib/Components/RichText.svelte';

    export let atelier = '';
    
    $: console.log('atelier: ', atelier);

    $: ({ nomArtisan, CodeCouleur, illustrationAtelier, illustrationArtisan, Vignettepersonnage, Textepresentation, objets } = atelier.data.attributes);

</script>

    <h1>{nomArtisan}</h1>

    <div>
        <h2>CodeCouleur</h2>
        <p>{CodeCouleur}</p>
    </div>


    <div>
        <h2>illustrationAtelier</h2>
        <p><img src="{illustrationAtelier?.data?.attributes?.formats.small.url}" alt=""></p>
    </div>

    <div>
        <h2>illustrationArtisan</h2>
        <p><img src="{illustrationArtisan?.data?.attributes?.formats.small.url}" alt=""></p>
    </div>

    <div>
        <h2>Vignettepersonnage</h2>
        <p><img src="{Vignettepersonnage?.data?.attributes?.formats.small.url}" alt=""></p>
    </div>

    

    <div>
        <h2>TextPresentation</h2> 
        <RichText blocks={Textepresentation} />
    </div>

	<div>
        <h2>objets</h2>
        <ul>
            {#each objets.data as obj}
                <li>
                    <a href="/objets/{obj.id}">{obj.attributes?.nomObjet}</a> - {obj.attributes?.CartelSimple} - {obj.attributes?.CoordonnesObjet}</li>
            {/each}
        </ul>
    </div>