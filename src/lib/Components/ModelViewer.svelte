<script>
    export let objet = '';
    export let exposure = 1;

    let modelviewer, orbit, target, script;

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
    <script type="module" bind:this={script} src="https://ajax.googleapis.com/ajax/libs/model-viewer/3.4.0/model-viewer.min.js" />
</svelte:head>


<section>
    <!-- Use it like any other HTML element -->
	<model-viewer 
        bind:this={modelviewer}
        alt="" 
        src="{objet.data?.attributes?.fichier3d?.data?.attributes?.url}" 
        shadow-intensity="1" 
        camera-controls 
        touch-action="pan-y" 
        exposure={exposure}
    ></model-viewer>

	<button on:click={ () => { getCameraOrbit() } }>Get Orbit</button>
	<button on:click={ () => { getCameraTarget() } }>Get Target</button>
	<button on:click={ () => { zoom(2) } }>Zoom In</button>
	<button on:click={ () => { zoom(-2) } }>Zoom Out</button>

	<p>Orbit : {orbit}</p>
	<p>Target : {target}</p>

</section>


<style>
    model-viewer {
        border: 1px solid;
        width: 600px;
        height: 500px;
    }
</style>
