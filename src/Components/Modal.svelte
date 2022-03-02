<script>
  /**
   * Event Modifiers
   *
   * @ once - makes sure the event can only fire once (removes handler)
   * @ preventDefault - prevent the default action (run e.preventDefaul())
   * @ self - only fires the event if the clicked element is the target
   */

  export let showModal = false;
  export let isPromo = false;
  export let message = " Empty modal message";
</script>

{#if showModal}
  <div class="backdrop" class:promo={isPromo} on:click|self>
    <div class="modal">
      <p>{message}</p>

      <!-- <button on:click>Cancel</button>
      <button on:click>Proceed</button> -->
    </div>
  </div>
{/if}

<style>
  .backdrop {
    width: 100%;
    height: 100%;
    position: fixed;
    background-color: rgba(0, 0, 0, 0.8);
  }
  .modal {
    padding: 10px;
    border-radius: 10px;
    max-width: 400px;
    margin: 10% auto;
    text-align: center;
    background-color: white;
  }

  .promo .modal {
    background-color: crimson;
    color: white;
  }
</style>
