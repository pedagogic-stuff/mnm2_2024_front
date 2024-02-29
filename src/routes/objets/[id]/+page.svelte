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
    
    <p><em>CarteZone</em> : <img src="{objet.data?.attributes?.CarteZone.data.attributes.formats.large.url}" alt=""></p>

    <div>
        <em>qcms</em> : 
        <ul>
            {#each objet.data?.attributes?.qcms.data as qcm}
                <li>
                    <span>Question : {qcm.attributes.Question}</span>
                    <ul>
                        {#each qcm.attributes.reponse as rep }
                            <li>{rep.Choix} - {rep.VraiFaux}</li>
                        {/each}
                    </ul>
                    <p>CartelVrai : {qcm.attributes.CartelVrai}</p>
                    <p>CartelFaux : {qcm.attributes.CartelFaux}</p>
                </li>
            {/each}
        </ul>
    </div>

    <p><em>POI</em> : 
        {#each objet.data?.attributes?.POI as poi}
            <li>{poi.Cartel}</li>
        {/each}
    </p>
    
    <p><em>CoordonnesObjet</em> : {objet.data?.attributes?.CoordonnesObjet}</p>

    <p><em>fichier3d</em> : {objet.data?.attributes?.fichier3d}</p>

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
    model-viewer {
        border: 1px solid;
        width: 600px;
        height: 500px;
    }
</style>
