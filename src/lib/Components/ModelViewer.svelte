<script>
	import RichText from "./RichText.svelte";

    export let objet = '';
    export let exposure = 1;
    export let hotspots = [];
    export let manipulation = false;

    $: console.log('modelviewer objet: ', objet)

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
    <!-- 
        src= ????
        {objet.attributes?.URLavectexture}
        {objet.attributes?.Fichier3d?.data?.attributes?.url}
    -->
	<model-viewer 
        bind:this={modelviewer}
        loading="eager"
        alt="" 
        src="{objet.attributes?.Fichier3d?.data?.attributes?.url}" 
        poster="{objet.attributes?.visuelObjet2d?.data?.attributes?.url}"
        shadow-intensity="1" 
        camera-controls 
        touch-action="pan-y" 
        camera-orbit="{objet.data?.attributes.CoordonneesCamera}" 
        exposure={exposure}
    >

        {#if hotspots.length > 0}
            {#each hotspots as poi, i }

                <button 
                    class="Hotspot"
                    slot="hotspot-1" 
                    data-position="{poi.coordonnees}" 
                    data-normal="-0.6981260082270647m 0.40286001718554026m -0.5918816462690922m" 
                    data-orbit="3.711166deg 92.3035deg 0.04335197m"
                    data-target="{poi.poiOrbit}"
                    data-visibility-attribute="visible">
                    <div class="HotspotAnnotation">
                        <RichText blocks={poi.Cartel} />
                        <img width="300" src="{poi.Media?.data?.attributes.url}" alt="fe">
                    </div>
                </button>

            {/each}
        {/if}

    </model-viewer>

    <div class="actions">
        <button on:click={ () => { getCameraOrbit() } }>Get Orbit</button>
        <button on:click={ () => { getCameraTarget() } }>Get Target</button>
        <button on:click={ () => { zoom(4) } }>Zoom In</button>
        <button on:click={ () => { zoom(-4) } }>Zoom Out</button>

        <p>Orbit : {orbit}</p>
        <p>Target : {target}</p>
    </div>
</div>


<style>
    model-viewer {
        width: 60vw;
        height: 100vh;
        position: fixed;
        top: 0;
        right: 0;
        z-index: 2;
    }
    .actions {
        position: fixed;
        bottom: 100px;
        right: 20px;
        z-index: 1;
        background-color: gray;
        padding: 20px;
    }
    .Hotspot {
        background: rgb(255, 255, 255);
        border-radius: 32px;
        border: 0px;
        box-shadow: rgba(0, 0, 0, 0.25) 0px 2px 4px;
        box-sizing: border-box;
        cursor: pointer;
        height: 24px;
        padding: 8px;
        position: relative;
        transition: opacity 0.3s ease 0s;
        width: 24px;
    }
    .HotspotAnnotation {
        background: rgb(255, 255, 255);
        border-radius: 4px;
        box-shadow: rgba(0, 0, 0, 0.25) 0px 2px 4px;
        color: rgba(0, 0, 0, 0.8);
        display: block;
        font-family: Futura, Helvetica Neue, sans-serif;
        font-size: 18px;
        font-weight: 700;
        left: calc(100% + 1em);
        max-width: 128px;
        overflow-wrap: break-word;
        padding: 0.5em 1em;
        position: absolute;
        top: 50%;
        width: max-content;
    }
    .Hotspot > * {
        opacity: 1;
        transform: translateY(-50%);
    }
    .Hotspot {
        cursor: pointer;
    }
</style>
