<script>
    import RichText from '$lib/Components/RichText.svelte';

    export let qcms = '';
    export let qcmDone = false;
    export let exposure = 0;
    let correct = undefined;
    let qcmIndex = 0;
    let qcm;
    let showReponse = false;

    $: console.log('qcms: ', qcms)
    $: qcm = qcms.data[qcmIndex]
    $: console.log('qcm: ', qcm)

    const nexStep = () => {
        showReponse = false;
        if( qcmIndex < qcms.data.length - 1 ) {
            qcmIndex += 1;
            correct = undefined
        }
        else {
            qcmDone = true;
        }
    }
</script>



{#if qcm}
    <div class="cartel qcm_container relative">

        <div class="question">
            <div>
                {qcm.attributes.Question}
            </div>
        </div>
       
        {#each qcm.attributes.Responses as rep}
            <div>
                <button 
                    class="reponse" class:juste={rep.vraifaux && showReponse}
                    on:click={ () => { 
                        correct = rep.vraifaux; 
                        exposure = 1; 
                        showReponse = true;
                    }
                }>
                    {rep.text}
                </button>
            </div>
        {/each}

        {#if correct !== undefined }
            <div class="reponseBlock">
                {#if correct}
                    <p>Bien joué !</p>
                    <RichText blocks={qcm.attributes.cartel} />
                    <button class="next" on:click={ () => nexStep() }>
                        <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M1 7C0.447715 7 0 7.44772 0 8C0 8.55228 0.447715 9 1 9L1 7ZM15.7071 8.70711C16.0976 8.31658 16.0976 7.68342 15.7071 7.29289L9.34315 0.928932C8.95262 0.538408 8.31946 0.538408 7.92893 0.928932C7.53841 1.31946 7.53841 1.95262 7.92893 2.34315L13.5858 8L7.92893 13.6569C7.53841 14.0474 7.53841 14.6805 7.92893 15.0711C8.31946 15.4616 8.95262 15.4616 9.34315 15.0711L15.7071 8.70711ZM1 9L15 9V7L1 7L1 9Z" fill="white"/>
                        </svg>
                    </button>

                {:else}
                    <p>Tu y étais presque...</p>
                    <RichText blocks={qcm.attributes.cartel} />
                    <button class="next" on:click={ () => nexStep() }>
                        <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M1 7C0.447715 7 0 7.44772 0 8C0 8.55228 0.447715 9 1 9L1 7ZM15.7071 8.70711C16.0976 8.31658 16.0976 7.68342 15.7071 7.29289L9.34315 0.928932C8.95262 0.538408 8.31946 0.538408 7.92893 0.928932C7.53841 1.31946 7.53841 1.95262 7.92893 2.34315L13.5858 8L7.92893 13.6569C7.53841 14.0474 7.53841 14.6805 7.92893 15.0711C8.31946 15.4616 8.95262 15.4616 9.34315 15.0711L15.7071 8.70711ZM1 9L15 9V7L1 7L1 9Z" fill="white"/>
                        </svg>
                    </button>
                {/if}
            </div>
        {/if}

    </div>
{/if}

<style>
    button {
        border: none;
        background: none;
        color: inherit;
        font-family: inherit;
        font-size: inherit;
        cursor: pointer;
        width: 100%;
        text-align: left;
    }
    .cartel {
        padding: 15px;
    }
    .question {
        font-family: "Zarid";
        font-weight: 400;
        font-size: 30px;
        color: #ffffff;
        border-radius: 20px;
        padding: 60px 20px 60px 20px;
        position: relative;
    }
    .reponse {
        font-family: "Zarid";
        font-size: 25px;
        font-weight: 400;
        color: #ffffff;
        background: #686464;
        border-radius: 20px;
        padding: 20px 20px 20px 20px;
        position: relative;
        margin-top: 16px;
    }
    .juste {
        background: #009B6B;
        box-shadow: 0px 0px 25px 0px rgba(255, 255, 255, 0.25);
    }
    .next {
        text-align: right;
    }
    .qcmDetails {
        left: 200px;
        top: 200px;
        border: 1px solid white;
    }
    .reponseBlock {
        padding: 40px 20px;
        font-size: 2.5rem;
    }
</style>