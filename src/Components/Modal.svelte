<script>
    export let showModal = false
    export let isPromo = false
    export let message = " Empty modal message"
</script>

<style>
    .backdrop{
        width: 100%;
        height: 100%;
        position: fixed;
        background-color: rgba(0,0,0,0.8);
    }
    .modal{
        padding: 10px;
        border-radius: 10px;
        max-width: 400px;
        margin: 10% auto;
        text-align: center;
        background-color: white;
    }

    .promo .modal{
        background-color: crimson;
        color: white;
    }
</style>

{#if showModal}
<div class="backdrop" class:promo={isPromo} on:click>
    <div class="modal">
        <p>{message}</p>
    </div>
</div>
{/if}