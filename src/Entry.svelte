<script>
  let people = [
    { id: 0, name: "hoge", color: "green", type: "mage", hp: 50 },
    { id: 1, name: "boke", color: "orange", type: "crusader", hp: 50 },
    { id: 2, name: "moge", color: "pink", type: "priest", hp: 50 },
  ];

  const handleClick = (id) => {
      people = people.filter(person => person.id !== id)
  }
</script>

<main>
    {#each people as person (person.id)}
        <div>
            <h4 style="color:{person.color}">{person.name}</h4>
            <p>{person.type}</p>
            <button on:click={() => handleClick(person.id)}>Delete</button>
        </div>
    {:else}
        <p>There's nothing here...</p>
    {/each}
</main>

<style>
  main {
    text-align: center;
    padding: 1em;
    max-width: 240px;
    margin: 0 auto;
  }
  @media (min-width: 640px) {
    main {
      max-width: none;
    }
  }
</style>
