<script>
  let color = "green";

  let firstName = 'Hoge'
  let lastName = 'Boke'

  //reactive values
  $: fullName = `${firstName} ${lastName}`
  //reactive statements
  // $: console.log(color)

  //runs the whole block if either one of the states update
  $: {
    console.log(color)
    console.log(firstName)
  }

  const handleClick = () => (color = "red");
  const handleInputChange = (e) => {
    state = e.target.value;
  };
</script>

<main>
  <p style="color: {color}">{fullName} {color}</p>
  <input type="text" bind:value={firstName}>
  <input type="text" bind:value={lastName}>
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
