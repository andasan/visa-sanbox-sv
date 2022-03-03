<script>
  let name;
  let prof;
  let hp;

  let STA_dis = false
  let STR_dis = false
  let AGI_dis = false
  let DEX_dis = false
  let SPI_dis = false
  let INT_dis = false

  let limit = false

  //group binding
  let skills = []

  $: console.log(skills)
  
  $: {
      if(skills.length > 2){
        for(skill in skills){
              
        }
    }
  }

  const handleSubmit = () => {};

  const toDisable = (sk) => {
      const found = skills.includes(sk)
      console.log(found)
      if(found && skills.length > 2) result = false
      if(skills.length > 2) return true
      return false
  }
</script>

<h3>Add a new Player</h3>
<form on:submit|preventDefault={handleSubmit}>
  <input type="text" placeholder="Name" bind:value={name} />
  <input type="text" placeholder="Profession" bind:value={prof} />
  <input type="number" placeholder="HP" bind:value={hp} />
  <label>Classes</label>
  <select>
      <option value="warrior">Warrior</option>
      <option value="mage">Mage</option>
      <option value="scout">Scout</option>
      <option value="acolyte">Acolyte</option>
  </select>
  <h4>Starting Skill Attributes</h4>
  <input type="checkbox" bind:group={skills} value="STA" disabled={STA_dis} /> Stamina <br />
  <input type="checkbox" bind:group={skills} value="STR" disabled={STR_dis} /> Strength <br />
  <input type="checkbox" bind:group={skills} value="AGI" disabled={AGI_dis} /> Agility <br />
  <input type="checkbox" bind:group={skills} value="DEX" disabled={DEX_dis} /> Dexterity <br />
  <input type="checkbox" bind:group={skills} value="SPI" disabled={SPI_dis} /> Spirit <br />
  <input type="checkbox" bind:group={skills} value="INT" disabled={INT_dis} /> Intelligence <br />
  <br />
  <button>Add Player</button>
</form>

<style>
  form {
    color: #777;
  }
  h3, h4 {
    color: rgb(28, 30, 103);
  }
</style>
