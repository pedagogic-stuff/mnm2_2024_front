<script>
    import QCMs from '$lib/Components/QCMs.svelte'
    import Manipulation from '$lib/Components/Manipulation.svelte'

    export let objets = '';
    let objet;
    let step = undefined;
    let qcmDone = false;
    let manipulationDone = false;

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
        let populate = `populate[CarteZone][populate]=*&populate[qcms][populate]=*&populate[POI][populate]=*&populate[fichier3d][populate]=*`
        const url = `https://artisans.stagingserver.fr/api/objet3-ds/${id}?${populate}`;
        const reponse =  await fetch(url)
        objet = await reponse.json();
        return objet;
    }
    

</script>


<section>

    <h2>Choisi un objet : </h2>

    {#each objets.data as obj}
        <button 
            on:click={() => {
                step = 'qcm';
                launchObjPath(obj.id)
            }
        }>{obj.attributes.CodeObjet}</button>
    {/each}

    {#if objet}
        <h3>{objet.data.attributes.CodeObjet}</h3>

        {#if step == 'qcm' }
            <QCMs bind:qcmDone={qcmDone} qcms={objet.data.attributes.qcms} />
        {/if}

        {#if step == 'manipulation' }
            <Manipulation bind:manipulationDone={manipulationDone} {objet} />
        {/if}
        
    {/if}


</section>
