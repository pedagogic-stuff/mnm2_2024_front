<script>
    export let qcms = '';
    export let qcmDone = false;
    let correct = undefined;
    let qcmIndex = 0;
    let qcm;

    $: console.log('qcms: ', qcms)
    $: qcm = qcms.data[qcmIndex]

    const nexStep = () => {
        if( qcmIndex < qcms.data.length - 1 ) {
            qcmIndex += 1;
            correct = undefined
        }
        else {
            qcmDone = true;
        }
    }

    

</script>

<div>
    <h3>{qcm.attributes.Question}</h3>

    <ul class="">
        {#each qcm.attributes.reponse as rep}
            <li><button on:click={ () => correct = rep.VraiFaux }>{rep.Choix}</button></li>
        {/each}
    </ul>

    <div>
        {#if correct !== undefined }

            {#if correct}
                {qcm.attributes.CartelVrai}
                <button on:click={ () => nexStep() }>Next</button>
            {:else}
                {qcm.attributes.CartelFaux}
            {/if}
        {/if}
    </div>

</div>


