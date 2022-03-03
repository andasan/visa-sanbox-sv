<script>
  let name;
  let prof;
  let hp;
  
  const handleSubmit = () => {
      
  }
</script>

<h3>Add a new Player</h3>
<form on:submit|preventDefault={handleSubmit}>
  <input type="text" placeholder="Name" bind:value={name} />
  <input type="text" placeholder="Profession" bind:value={prof} />
  <input type="number" placeholder="HP" bind:value={hp}>
  <br />
  <button>Add Player</button>
</form>

<style>
  h3 {
    color: rgb(28, 30, 103);
  }
</style>
