<script>
    import QCMs from '$lib/Components/QCMs.svelte'
    import Manipulation from '$lib/Components/Manipulation.svelte'
    import ModelViewer from '$lib/Components/ModelViewer.svelte';

    export let objets = '';
    let objet;
    let step = undefined;
    let qcmDone = false;
    let manipulationDone = false;
    let exposure = 0;

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
            step = undefined
            qcmDone = false;
            manipulationDone = false;
            objet = undefined;
        }
    }

    const launchObjPath = async id => {
        let populate = `populate[qcms][populate]=*&populate[POI][populate]=*&populate[Fichier3d]=*&populate[CarteZone]=*`
        const url = `https://artisans.stagingserver.fr/api/objets/${id}?${populate}`;
        const reponse =  await fetch(url)
        objet = await reponse.json();
        return objet;
    }
    

</script>


<section class="infos_container">

    <h2>Choisi un objet : </h2>

    {#each objets.data as obj}
        <button 
            on:click={() => {
                step = 'qcm';
                launchObjPath(obj.id)
            }
        }>{obj.attributes.nomObjet}</button>
    {/each}

</section>

<section class="infos_container">
    {#if objet}
        <div class="relative">
            <h3>{objet.data.attributes.nomObjet}</h3>
        </div>
        
        {#if step == 'qcm' }
            <QCMs bind:qcmDone={qcmDone} bind:exposure={exposure} qcms={objet.data.attributes.qcms} />
            <ModelViewer {objet} exposure={exposure} />
        {/if}

        {#if step == 'manipulation' }
            <Manipulation bind:manipulationDone={manipulationDone} {objet} />
        {/if}
        
    {/if}

</section>


<style>
    .infos_container {
        width: 40vw;
        padding: 40px 0 100px;
    }
</style>