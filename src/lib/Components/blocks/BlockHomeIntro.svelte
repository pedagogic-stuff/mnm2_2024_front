<script>
    export let msg = ''
</script>

<section class="flex">
    <div class="tuto-pop-up">
        {msg}
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
        height: 35px;
        overflow: hidden;
    }
</style>