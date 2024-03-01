<script>
    import ListeObjets from '$lib/Components/ListeObjets.svelte'
    import ModelViewer from '$lib/Components/ModelViewer.svelte';

	export let data;
	$: ({ objet, objets } = data);



</script>

<svelte:head>
	<title>Ateliers d'artisans - Objet {objet.data?.attributes?.CodeObjet}</title>
	<meta name="description" content="Ateliers d'artisans" />
</svelte:head>


<div class="relative infos_container">

    <section>
        <a href="/objets">Retour aux objets</a>
    </section>

    <section>

        <h1><em>Code Objet</em> : {objet.data?.attributes?.CodeObjet}</h1>
        
        <div>
            <h2>CarteZone</h2>
            <p><img src="{objet.data?.attributes?.CarteZone.data.attributes.formats.large.url}" alt=""></p>
        </div>


        <div>
            <h2>qcms</h2> 
            <ul>
                {#each objet.data?.attributes?.qcms.data as qcm}
                    <li>
                        <h3>Question : {qcm.attributes.Question}</h3>
                        <ul>
                            {#each qcm.attributes.reponse as rep }
                                <li>{rep.Choix} - {rep.VraiFaux}</li>
                            {/each}
                        </ul>
                        <p><strong>CartelVrai</strong> : {qcm.attributes.CartelVrai}</p>
                        <p><strong>CartelFaux</strong> : {qcm.attributes.CartelFaux}</p>
                    </li>
                {/each}
            </ul>
        </div>

        <div>
            <h2>POI</h2> 
            <ul>
                {#each objet.data?.attributes?.POI as poi}
                    <li><strong>{poi.Cartel}</strong> - <img width="300" src="{poi.Media.data.attributes.url}" alt="fe"></li>
                {/each}
            </ul>
        </div>
        
        <div><h2>CoordonnesObjet</h2>
            <p>{objet.data?.attributes?.CoordonnesObjet}</p>
        </div>

        <div>
            <h2>fichier3d</h2>
            <p>{objet.data?.attributes?.fichier3d}</p>
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
