<script>
    import RichText from '$lib/Components/RichText.svelte';
    import ModelViewer from '$lib/Components/ModelViewer.svelte';
    import Manipulation from '$lib/Components/Manipulation.svelte'
    import QCMs from '$lib/Components/QCMs.svelte'
	import { enhance, applyAction } from '$app/forms';

    export let data;
	$: ({ atelier, ateliers } = data);
    $: ({ nomArtisan, CodeCouleur, illustrationAtelier, illustrationArtisan, Vignettepersonnage, Textepresentation, objets } = atelier.data.attributes);

    let activeObject = '';
    let objet;
    let qcmDone = false;
    let manipulationDone = false;
    let exposure = 0;
    let step = 0;

    $: {
        console.log('objets: ', objets)
        console.log('objet: ', objet)
        console.log('step: ', step)
    }
    $: {
        if( qcmDone ) {
            step = 'manipulation'
        }
    }
    $: {
        if( manipulationDone ) {
            step = 0
            qcmDone = false;
            manipulationDone = false;
            objet = undefined;
        }
    }

    const launchSequence = () => {
        step = 'choix';
    }
    const resetSequence = () => {
        step = 0;
    }

</script>

<svelte:head>
	<title>Ateliers d'artisans - {atelier.data?.attributes?.nomArtisan}</title>
	<meta name="description" content="Ateliers d'artisans" />
</svelte:head>



    <img class="atelierBg" src="{atelier.data.attributes.illustrationAtelier?.data?.attributes?.url}" alt="">

    <div class="atelierContent" data-artisan="{nomArtisan}">

        <div class="cols">

            <div class="leftCol">

                {#if step == 0}
                    <div class="atelierMainCartel">
                        <div>
                            <RichText blocks={Textepresentation} />
                        </div>
                        <button on:click={() => launchSequence() }>Launch sequence</button>
                        <button on:click={() => resetSequence() }>Reset sequence</button>
                    </div>
                {/if}
                
                {#if step == 'qcm' }
                    <QCMs bind:qcmDone={qcmDone} bind:exposure={exposure} qcms={objet.attributes.qcms} />
                {/if}

                {#if step == 'manipulation' }
                    <Manipulation bind:manipulationDone={manipulationDone} {objet} />
                {/if}
                
            </div>


            <div class="rightCol">            

                {#if step === 'choix' }

                    <div class="objetsList">
                        {#each objets.data as obj}

                            <form
                                method="POST"
                                action="/ateliers?/pickObject"
                                use:enhance={({ formElement, formData, action, cancel, submitter }) => {

                                    return async ({ result, update }) => {
                                        console.log('result: ', result)
                                        
                                        step = 'qcm';
                                        objet = result.data.data;   
                                        
                                    };
                                }}
                            >
                                <input name="id" type="hidden" value="{obj.id}">
                                <button class="objetPick">
                                    {#if obj.attributes?.visuelObjet2d.data }
                                        {#each obj.attributes?.visuelObjet2d.data as visuel}
                                            <img src="{visuel.attributes.url}" alt="{obj.attributes?.nomObjet}"> 
                                        {/each}
                                    {/if}
                                </button>

                            </form>
                        {/each}
                    </div>
                {/if}


                {#if step === 'qcm' || step == 'manipulation' }
                    <ModelViewer {objet} exposure={exposure} manipulation={true} />
                {/if}
                
            </div>

        </div>
    </div>


<style>
    .atelierBg {
        position: fixed;
        z-index: 1;
        top: 0;
        bottom: 0;
        right: 0;
        left: 0;
        width: 100%;
        height: 100%;
        filter:brightness(.7)
    }
    .atelierContent {
        position: relative;
        z-index: 2;
        color: white;
    }
    .cols {
        display: flex;
    }
    .leftCol {
        width: 70%;
    }
    .rightCol {
        width: 30%;
        display: flex;
        justify-content: flex-end;
    } 
    .atelierMainCartel {
        max-width: 30vw;
        background-color: white;
        color: gray;
        padding: 20px;
    }
    .objetsList {
        display: flex;
        flex-direction: column;
        gap: 20px;
    }
    .objetPick {
        background: none;
        border: none;
        cursor: pointer;
    }
</style>
