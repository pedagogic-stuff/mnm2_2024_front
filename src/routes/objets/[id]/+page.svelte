<script>
    import ListeObjets from '$lib/Components/ListeObjets.svelte'
    import ModelViewer from '$lib/Components/ModelViewer.svelte';
    import RichText from '$lib/Components/RichText.svelte';

	export let data;
	$: ({ objet, objets } = data);
    $: ({ nomObjet, CodeObjet, CarteZone, visuelObjet2d, qcms, POI, CoordonneesCamera, Fichier3d, CartelSimple } = objet.data.attributes);

    $: console.log('objet: ', objet)

</script>

<svelte:head>
	<title>Ateliers d'artisans - Objet {nomObjet}</title>
	<meta name="description" content="Ateliers d'artisans" />
</svelte:head>


<div class="relative infos_container">

    <section>
        <a href="/objets">Retour aux objets</a>
    </section>

    <section>

        <h1><em>nomObjet</em> : {nomObjet} - {CodeObjet} </h1>
        
        <div>
            <h2>CarteZone</h2>
            {#if CarteZone }
                <p><img src="{CarteZone.data?.attributes?.formats.large.url}" alt=""></p>
            {/if}
        </div> 

        <div>
            <h2>visuelObjet2d</h2>
            {#if visuelObjet2d }
                <p><img src="{visuelObjet2d.data?.attributes?.formats.large.url}" alt=""></p>
            {/if}
        </div> 

        
        {#if CartelSimple }
            <RichText blocks={CartelSimple} />
        {/if}

        <div>
            <h2>qcms</h2> 
            <ul>
                {#if qcms.data.length > 0 }
                    {#each qcms.data as qcm}
                        <li>
                            <h3>question : {qcm.attributes.Question}</h3>
                            <ul>
                                {#each qcm.attributes.Responses as rep }
                                    <li>{rep.text} - {rep.vraifaux}</li>
                                {/each}
                            </ul>
                            <p><strong>cartel</strong> : <RichText blocks={qcm.attributes.cartel} /> </p>
                        </li>
                    {/each}
                {/if}
            </ul>
        </div>

        <div>
            <h2>POI</h2> 
            <ul>
                {#if POI.length > 0 }
                    {#each POI as poi}
                        <li>
                            <RichText blocks={poi.Cartel} />
                            <img width="300" src="{poi.Media?.data?.attributes?.url}" alt="fe"></li>
                    {/each}
                {/if}
            </ul>
        </div>
        
        <div><h2>CoordonneesCamera</h2>
            <p>{CoordonneesCamera}</p>
        </div>

        <div>
            <h2>Fichier3d</h2>
            <p>{Fichier3d.data?.attributes.name}</p>
        </div>
    </section>
</div>

<ModelViewer {objet} />

<ListeObjets {objets} />

<style>
    .infos_container {
        width: 40vw;
        padding: 40px 0 100px;
    }
    section {
        margin: 40px 0;
    }
    div {
        margin-bottom: 40px;
    }
</style>
