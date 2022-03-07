<script>
   export let type = 'primary'
   export let flat = false
   export let inverse = false
</script>

<button class={type} class:flat={flat} class:inverse={inverse} on:click>
    <slot></slot>
</button>

<style>

    button {
        border: 0;
        cursor: pointer;
        border-radius: 6px;
        padding: 8px 12px;
        font-weight: bold;
        box-shadow: 1px 2px 3px rgba(0, 0, 0, 0.2);
    }
    .primary {
        background-color: #ffcc56;
        color: #3d3115;
    }

    .secondary{
        background-color: #f5743b;
        color: white;
    }

    .flat{
        box-shadow: none;
    }

    .primary.inverse{
        background-color: #3d3115;
        color: #ffcc56;
        border: 2px solid #ffcc56;
    }

    .secondary.inverse{
        background-color: white;
        color: #f5743b;
        border: 2px solid #f5743b;   
    }
</style>
