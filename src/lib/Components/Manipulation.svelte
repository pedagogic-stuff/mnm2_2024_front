<script>
    import ModelViewer from '$lib/Components/ModelViewer.svelte';
    export let objet = '';
    export let manipulationDone = false;

    $: console.log('objet.POI', objet.POI)
</script>


<h2>Manipulation</h2>


<ModelViewer {objet} hotspots={objet.data.attributes.POI} />

<div class="relative">
    <button on:click={ () => manipulationDone = true}>J'ai fini</button>
</div>