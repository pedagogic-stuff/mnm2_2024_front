<script>
    export let objet = '';
    export let exposure = 1;
    export let hotspots = [];

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


<div class="modelviewer_container">
    <!-- Use it like any other HTML element -->
	<model-viewer 
        bind:this={modelviewer}
        alt="" 
        src="{objet.data?.attributes?.fichier3d?.data?.attributes?.url}" 
        shadow-intensity="1" 
        camera-controls 
        touch-action="pan-y" 
        exposure={exposure}
    >

        {#if hotspots.length > 0}
            {#each hotspots as poi, i }

                <button class="Hotspot" slot="hotspot-1" data-position="-226.14160109560976m 11.918746291814777m 43.74542844867127m" data-normal="-0.6981260082270647m 0.40286001718554026m -0.5918816462690922m" data-visibility-attribute="visible">
                    <div class="HotspotAnnotation">{poi.Cartel}</div>
                </button>
                <div class="progress-bar hide" slot="progress-bar">
                    <div class="update-bar"></div>
                </div>

            {/each}
        {/if}

    </model-viewer>

    <div class="actions">
        <button on:click={ () => { getCameraOrbit() } }>Get Orbit</button>
        <button on:click={ () => { getCameraTarget() } }>Get Target</button>
        <button on:click={ () => { zoom(2) } }>Zoom In</button>
        <button on:click={ () => { zoom(-2) } }>Zoom Out</button>

        <p>Orbit : {orbit}</p>
        <p>Target : {target}</p>
    </div>
</div>


<style>
    model-viewer {
        border: 1px solid;
        width: 100vw;
        height: 100vh;
        position: fixed;
        top: 0;
        left: 0;
        z-index: 0;
    }
    .actions {
        position: fixed;
        bottom: 100px;
        left: 20px;
        z-index: 1;
        background-color: gray;
        padding: 20px;
    }
</style>
