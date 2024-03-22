<script>
    import RichText from '$lib/Components/RichText.svelte';

    export let atelier = '';
    
    $: console.log('atelier: ', atelier);

    $: ({ nomArtisan, CodeCouleur, illustrationAtelier, illustrationArtisan, Vignettepersonnage, Textepresentation, objets } = atelier.data.attributes);

</script>

    <h1>{nomArtisan}</h1>

    <div style="background-color: {CodeCouleur}">
        <h2>CodeCouleur</h2>
        <p>{CodeCouleur}</p>
    </div>


    <!-- <div>
        <h2>illustrationAtelier</h2>
        <p><img src="{illustrationAtelier?.data?.attributes?.url}" alt=""></p>
    </div> -->

    <div>
        <h2>illustrationArtisan</h2>
        <p><img src="{illustrationArtisan?.data?.attributes?.url}" alt=""></p>
    </div>

    <!-- <div>
        <h2>Vignettepersonnage</h2>
        <p><img src="{Vignettepersonnage?.data?.attributes?.url}" alt=""></p>
    </div> -->

    

    <div>
        <h2>TextPresentation</h2> 
        <RichText blocks={Textepresentation} />
    </div>

