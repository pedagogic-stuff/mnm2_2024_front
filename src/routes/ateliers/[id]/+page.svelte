<script>
    import BoiteDialogue from '$lib/Components/blocks/BoiteDialogue.svelte';
    import ModelViewer from '$lib/Components/ModelViewer.svelte';
    import Manipulation from '$lib/Components/Manipulation.svelte'
    import QCMs from '$lib/Components/QCMs.svelte'
    import { afterNavigate } from '$app/navigation';



	import { enhance, applyAction } from '$app/forms';

    export let data;
	$: ({ atelier, ateliers } = data);
    $: ({ nomArtisan, CodeCouleur, illustrationAtelier, illustrationArtisan, Vignettepersonnage, Textepresentation, objets, CheminAtelier } = atelier.data.attributes);

    let activeObject = '';
    let objet;
    let qcmDone = false;
    let manipulationDone = false;
    let exposure = 0;
    let step = 0;
    let manipulation = false;

    $: {
        console.log('objets: ', objets)
        console.log('objet: ', objet)
        console.log('step: ', step)
    }
    $: {
        if( qcmDone ) {
            step = 'manipulation'
            manipulation = true;
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
        manipulation = false;
        exposure = 0;
        qcmDone = false;
        manipulationDone = false;
    }

    afterNavigate((navigation) => {
        resetSequence()
    });

</script>

<svelte:head>
	<title>Ateliers d'artisans - {atelier.data?.attributes?.nomArtisan}</title>
	<meta name="description" content="Ateliers d'artisans" />
</svelte:head>


        <img class="atelierBg" src="{atelier.data.attributes.illustrationAtelier?.data?.attributes?.url}" alt="">

    {#if step == 0 || step == "choix"}
        <img class="atelierBg" src="{atelier.data.attributes.illustrationArtisan?.data?.attributes?.url}" alt="">
    {/if}

    <div class="atelierContent" data-artisan="{nomArtisan}">

        <div class="cols">

            <div class="leftCol">

                {#if step == 0 || step == 'choix' }
                    <BoiteDialogue 
                        msg={Textepresentation}
                        on:launch={ () => {
                            launchSequence()  
                        }}
                        on:reset={ () => {
                            resetSequence()
                        }}/>
                {/if}
                
                {#if step == 'qcm' }
                    <QCMs bind:qcmDone={qcmDone} bind:exposure={exposure} qcms={objet.attributes.qcms} />
                {/if}

                {#if step == 'manipulation' }
                    <Manipulation bind:manipulationDone={manipulationDone} CheminAtelier={CheminAtelier} {objet} />
                {/if}
                
            </div>


            <div class="rightCol">            

                {#if  step == 0 || step === 'choix' }

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
                                <button class="objetPick" disabled={step == 0 }>

                                    {#if step == 0 }
                                        {#if obj.attributes?.visuelObjet2d.data }
                                            {#each obj.attributes?.visuelObjet2d.data as visuel}
                                                    <img src="{visuel.attributes.url}" alt="{obj.attributes?.nomObjet}"> 
                                            {/each}
                                        {/if}
                                    {:else}
                                        {#if obj.attributes?.visuelObjet2d_avecHalo.data }
                                            <img src="{obj.attributes?.visuelObjet2d_avecHalo.data.attributes.url}" alt="{obj.attributes?.nomObjet}"> 
                                        {/if}
                                    {/if}
                                </button>

                            </form>
                        {/each}
                    </div>
                {/if}


                {#if step === 'qcm' || step == 'manipulation' }
                    {#key step}
                        <ModelViewer {objet} exposure={exposure} {manipulation} />
                    {/key}
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
        filter:brightness(.7);
        object-position: center right;
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
        position: fixed;
        right: 65px;
    }
    .objetPick {
        background: none;
        border: none;
        cursor: pointer;
        width: 300px;
        height: 300px;
    }
    .objetPick img {
        max-height: 80%;
    }
    button:disabled {
        cursor: default;
    }
</style>
