<script>
    import ModelViewer from '$lib/Components/ModelViewer.svelte';
    export let objet = '';
    export let manipulationDone = false;
</script>


<h2>Manipulation</h2>


<ModelViewer {objet} />


<button on:click={ () => manipulationDone = true}>J'ai fini</button>    