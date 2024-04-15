<script>
    import RichText from '$lib/Components/RichText.svelte';
    import { createEventDispatcher } from 'svelte';
    
    const dispatch = createEventDispatcher();

    function launchSequence() {
      dispatch('launch');
	  }
    function resetSequence() {
      dispatch('reset');
	  }

    export let msg= '';
</script>



    <div class="boite-dialogue">
      <!-- <button class="small" on:click={() => resetSequence() }>Reset sequence</button> -->

        <div class="texte-cartel"> 
          <RichText blocks={msg} />
        </div>
      

          <span class="fleche">
            <button on:click={() => launchSequence() }>
              <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M1 7C0.447715 7 0 7.44772 0 8C0 8.55228 0.447715 9 1 9L1 7ZM15.7071 8.70711C16.0976 8.31658 16.0976 7.68342 15.7071 7.29289L9.34315 0.928932C8.95262 0.538408 8.31946 0.538408 7.92893 0.928932C7.53841 1.31946 7.53841 1.95262 7.92893 2.34315L13.5858 8L7.92893 13.6569C7.53841 14.0474 7.53841 14.6805 7.92893 15.0711C8.31946 15.4616 8.95262 15.4616 9.34315 15.0711L15.7071 8.70711ZM1 9L15 9V7L1 7L1 9Z" fill="white"/>
                </svg>
            </button>

          </span>

      </div>


<style>
  .boite-dialogue {
    background: #2b2b2b;
    border-radius: 20px;
    max-width: 530px;
    width: 90%;
    position: fixed;
    left: 20vw;
    bottom: 20vh;
    padding: 20px;
    font-size: 2.3rem;
  }
  button {
    background: none;
    border: none;
  }
  .small {
    font-size: 10px;
    color: white;
  }
  .fleche {
    width: 16px;
    height: 16px;
    position: absolute;
    right: 20px;
    bottom: 20px;
  }

</style>