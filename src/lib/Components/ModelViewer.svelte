<script>
    import Cartel from "$lib/Components/blocks/Cartel.svelte";

    export let objet = '';
    export let exposure = 1;
    export let manipulation = false;

//    $: console.log('modelviewer: ', modelviewer)
//    $: console.log('modelviewer objet: ', objet)
    $: console.log('modelviewer objet.attributes.POI: ', objet.attributes.POI)
    $: console.log('objet.data?.attributes.CoordonneesCamera: ', objet.attributes.CoordonneesCamera)
    

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

    const annotationClicked = (annotation) => {
        let dataset = annotation.dataset;
        modelviewer.cameraTarget = dataset.target;
        modelviewer.cameraOrbit = dataset.orbit;
        modelviewer.fieldOfView = '45deg';
    }

    $: if(modelviewer) {
        modelviewer.querySelectorAll('button').forEach((hotspot) => {
            hotspot.addEventListener('click', () => annotationClicked(hotspot));
        });
    }

    let displayCartel = false, cartel_src_url = '', cartel_text = '', cartel_title = '';

    const updatePoiCartel = (titre, txt, url) => {
        console.log('updatePoiCartel')
        displayCartel = true;
        cartel_src_url = url;
        cartel_text = txt;
        cartel_title = titre;
    }
    
</script>

<svelte:head>
    <script type="module" bind:this={script} src="https://ajax.googleapis.com/ajax/libs/model-viewer/3.4.0/model-viewer.min.js" />
</svelte:head>




<Cartel titre={cartel_title} texte={cartel_text} visuel={cartel_src_url} bind:displayed={displayCartel}/>




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
        camera-orbit="{objet.attributes.CoordonneesCamera}" 
        exposure={exposure}
    >

        {#if manipulation && objet.attributes.POI.length > 0}
            {#each objet.attributes.POI as poi, i }

            <!-- data-position="-0.0569m 0.0969m -0.1398m" 
            data-normal="-0.5829775m 0.2863482m -0.7603565m" 
            data-orbit="-50.94862deg 84.56856deg 0.06545582m" 
            data-target="-0.04384604m 0.07348397m -0.1213202m" -->

                {#if i === 0 }
                    <button 
                        class="Hotspot"
                        slot="hotspot-1" 
                        data-position="{poi.dataPosition}" 
                        data-normal="{poi.dataNormal}" 
                        data-orbit="{poi.dataOrbit}"
                        data-target="{poi.dataTarget}"
                        
                        on:click={() => {
                            updatePoiCartel(poi.Titre, poi.Cartel, poi.Media?.data?.attributes.url);
                        }}
                    >
                    </button>

                {:else if i === 1}
                    <button 
                        class="Hotspot"
                        slot="hotspot-2" 
                        data-position="{poi.dataPosition}" 
                        data-normal="{poi.dataNormal}" 
                        data-orbit="{poi.dataOrbit}"
                        data-target="{poi.dataTarget}"
                        data-visibility-attribute="visible"
                                                
                        on:click={() => {
                            updatePoiCartel(poi.Titre, poi.Cartel, poi.Media?.data?.attributes.url);
                        }}
                    >
                    </button>

                {:else if i === 2}
                    <button 
                        class="Hotspot"
                        slot="hotspot-3" 
                        data-position="{poi.dataPosition}" 
                        data-normal="{poi.dataNormal}" 
                        data-orbit="{poi.dataOrbit}"
                        data-target="{poi.dataTarget}"
                        data-visibility-attribute="visible"
                                                
                        on:click={() => {
                            updatePoiCartel(poi.Titre, poi.Cartel, poi.Media?.data?.attributes.url);
                        }}
                    >
                    </button>

                {:else if i === 3}
                    <button 
                        class="Hotspot"
                        slot="hotspot-4" 
                        data-position="{poi.dataPosition}" 
                        data-normal="{poi.dataNormal}" 
                        data-orbit="{poi.dataOrbit}"
                        data-target="{poi.dataTarget}"
                        data-visibility-attribute="visible"
                                                
                        on:click={() => {
                            updatePoiCartel(poi.Titre, poi.Cartel, poi.Media?.data?.attributes.url);
                        }}
                    >
                    </button>
                {/if}

            {/each}
        {/if}

        <div class="progress-bar hide" slot="progress-bar">
            <div class="update-bar"></div>
        </div>
        
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
        width: calc(100vw - 500px);
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
        z-index: 3;
        background-color: gray;
        padding: 20px;
    }
    .Hotspot {
        border: 0px;
        box-sizing: border-box;
        cursor: pointer;
        height: 80px;
        position: relative;
        transition: opacity 0.3s ease 0s;
        width: 80px;
        background: none;
        background-image: url('/images/eye.png');
        background-size: cover;
        background-repeat: no-repeat;
    }
    .Hotspot {
        cursor: pointer;
    }
</style>
