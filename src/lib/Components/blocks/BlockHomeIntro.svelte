<script>
    import RichText from '$lib/Components/RichText.svelte';

    export let msg = ''
</script>

<section class="flex">
    <div class="tuto-pop-up" class:nomargin={typeof msg === "object"}>
        {#if typeof msg == "object"}
            <RichText blocks={msg} />
        {:else}
            {@html msg}
        {/if}
    </div>
</section>

<style>
    .flex {
        justify-content: center;
        margin-bottom: 40px;
    }

    .tuto-pop-up {
        display: flex;
        align-items: center;
        justify-content: center;
        text-align: center;
        color: #ffffff;
        font-size: 25px;
        font-weight: 400;
        background: #007d55;
        border-radius: 40px;
        max-width: 828px;
        width: 90%;
        overflow: hidden;
        padding: 10px;
    }
    .nomargin {
        padding-bottom: 0;
    }
</style>