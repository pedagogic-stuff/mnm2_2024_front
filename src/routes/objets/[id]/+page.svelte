<script>
	export let data;
	$: ({ objet } = data);


	let modelviewer, orbit, target, script;

    $: {
		console.log(modelviewer)
		console.log(orbit)
	}

	const getCameraOrbit = () => {
		orbit = modelviewer.getCameraOrbit()
	}
	const getCameraTarget = () => {
		target = modelviewer.getCameraTarget()
	}
	const zoom = (z) => {
		modelviewer.zoom(z)
	}

</script>

<svelte:head>
	<title>Ateliers d'artisans - Objet {objet.data?.attributes?.CodeObjet}</title>
	<meta name="description" content="Ateliers d'artisans" />
    <script type="module" bind:this={script} src="https://ajax.googleapis.com/ajax/libs/model-viewer/3.4.0/model-viewer.min.js" />
</svelte:head>


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
                <li>{poi.Cartel}</li>
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

<section>
    <!-- Use it like any other HTML element -->
	<model-viewer bind:this={modelviewer} alt="" src="{objet.data?.attributes?.fichier3d?.data?.attributes?.url}" shadow-intensity="1" camera-controls touch-action="pan-y"></model-viewer>

	<button on:click={ () => { getCameraOrbit() } }>Get Orbit</button>
	<button on:click={ () => { getCameraTarget() } }>Get Target</button>
	<button on:click={ () => { zoom(2) } }>Zoom In</button>
	<button on:click={ () => { zoom(-2) } }>Zoom Out</button>

	<p>Orbit : {orbit}</p>
	<p>Target : {target}</p>

</section>


<style>
    section {
        margin: 40px 0;
    }
    div {
        margin-bottom: 40px;
    }
    model-viewer {
        border: 1px solid;
        width: 600px;
        height: 500px;
    }
</style>
