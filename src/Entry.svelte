<script>
  export let name;
  let color = "green";

  const handleClick = () => (color = "red");
  const handleInputChange = (e) => {
    state = e.target.value;
  };
</script>

<main>
  <h1>Hello {name}!</h1>
  <p style="color: {color}">{color}</p>
  <button on:click={handleClick}>Change Color to Red</button>
  <!-- One way data binding -->
  <!-- <input type="text" on:input={handleInputChange} value={state} /> -->

  <!-- Two way data binding -->
  <input type="text" bind:value={color}>
</main>

<style>
  main {
    text-align: center;
    padding: 1em;
    max-width: 240px;
    margin: 0 auto;
  }

  h1 {
    color: #ff3e00;
    text-transform: uppercase;
    font-size: 4em;
    font-weight: 100;
  }

  @media (min-width: 640px) {
    main {
      max-width: none;
    }
  }
</style>
