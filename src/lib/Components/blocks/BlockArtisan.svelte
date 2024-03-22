<script>
    export let atelier = '';
</script>

<div class="block">
    <a href="/ateliers/{atelier.id}">
        {atelier.attributes?.nomArtisan}
        <img src="{atelier.attributes?.Vignettepersonnage?.data?.attributes?.formats.small.url}" alt="">
    </a>
</div>


<style>

.block {
    flex: 0 0 30%;
}
</style>