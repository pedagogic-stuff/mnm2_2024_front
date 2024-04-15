<script>
    export let atelier = '';
    $: console.log('[BLOCKARTISAN] atelier: ', atelier)
</script>

<div class="block">
    <a class="block_action" href="/ateliers/{atelier.id}">
        <div class="button block_action" style="background-color:{atelier.attributes?.CodeCouleur}">
            <span>{atelier.attributes?.nomArtisan}</span>
        </div>

        <div class="block_visuels" style="background-color:{atelier.attributes?.CodeCouleur}">
            <img class="block_perso" src="{atelier.attributes?.Vignettepersonnage?.data?.attributes?.url}" alt="">
            <img src="/images/door.png" alt="porte" class="background">
        </div>
    </a>
</div>


<style>
.block {
    flex: 0 0 30%;
}
.block_action {
    display: flex;
    justify-content: center;
    flex-direction: column;
    align-items: center;
}
.block_visuels {
    position: relative;
}
.block_perso {
    position: absolute;
    left: 0;
    right: 0;
    bottom: 0;
    max-height: 100%;
    height: 90%;
}
.block_action {
    margin-bottom: 20px;
    color: white;
    border: none;
    text-align: center;
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 8px 10px 8px 10px;
    border-radius: 50px;
    font-size: 2.4rem;
    min-width: 170px;
}


</style>