<script>
    import RichText from '$lib/Components/RichText.svelte';

    export let msg = ''
</script>

<section class="flex">
    <div class="tuto-pop-up">
        <RichText blocks={msg} />
    </div>
</section>

<style>
    .flex {
        justify-content: center;
        margin-bottom: 40px;
    }

    .tuto-pop-up {
        text-align: center;
        color: #ffffff;
        font-size: 25px;
        font-weight: 400;
        background: #007d55;
        border-radius: 40px;
        max-width: 828px;
        width: 90%;
        overflow: hidden;
        padding: 10px 10px 0 10px;
    }
</style>