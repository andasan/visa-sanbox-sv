<script>
  //   import { createEventDispatcher } from "svelte";
  /**
   * Event Modifiers
   *
   * @ once - makes sure the event can only fire once (removes handler)
   * @ preventDefault - prevent the default action (run e.preventDefaul())
   * @ self - only fires the event if the clicked element is the target
   */
  //   export let selectedPerson;
  export let showModal = false;
  export let isPromo = false;

  //   const dispatch = createEventDispatcher();

  //   const handleDelete = () => dispatch("delete", { id: selectedPerson.id });
</script>

{#if showModal}
  <div class="backdrop" class:promo={isPromo} on:click|self>
    <div class="modal">
      <slot name="title"><!-- optional fallback --></slot>
      <slot />
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
