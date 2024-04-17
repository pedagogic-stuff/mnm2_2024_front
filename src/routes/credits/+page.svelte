<script>
    import RichText from '$lib/Components/RichText.svelte';

	export let data;
	$: ({ credits } = data);
    $: console.log(credits);

</script>

<svelte:head>
	<title>Ateliers d'artisans - Crédits</title>
	<meta name="description" content="Ateliers d'artisans" />
</svelte:head>


<section>
    <h1>Crédits</h1>

    <RichText blocks={credits.data.attributes.contenu} />

</section>

<style>
    h1 {
        margin-bottom: 4rem;
    }
    section {
        margin-top: 100px;
        max-width: 700px;
    }
</style>