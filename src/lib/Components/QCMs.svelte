<script>
    import RichText from '$lib/Components/RichText.svelte';

    export let qcms = '';
    export let qcmDone = false;
    export let exposure = 0;
    let correct = undefined;
    let qcmIndex = 0;
    let qcm;

    $: console.log('qcms: ', qcms)
    $: qcm = qcms.data[qcmIndex]
    $: console.log('qcm: ', qcm)

    const nexStep = () => {
        if( qcmIndex < qcms.data.length - 1 ) {
            qcmIndex += 1;
            correct = undefined
        }
        else {
            qcmDone = true;
            exposure = 0;
        }
    }

</script>

{#if qcm}
    <div class="qcm_container relative">
        <h3>{qcm.attributes.Question}</h3>

        <ul class="">
            {#each qcm.attributes.Responses as rep}
                <li><button on:click={ () => { correct = rep.vraifaux; exposure = 1} }>{rep.text}</button></li>
            {/each}
        </ul>

        <div>
            {#if correct !== undefined }

                {#if correct}
                    <p>Bonne réponse ! </p>
                    <RichText blocks={qcm.attributes.cartel} />
                    <button on:click={ () => nexStep() }>Next</button>
                {:else}
                    <p>Mauvaise réponse...</p>
                    <RichText blocks={qcm.attributes.cartel} />
                    <button on:click={ () => nexStep() }>Next</button>
                {/if}

            {/if}
        </div>

    </div>
{/if}

