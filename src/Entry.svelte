<script>
  import Modal from "./Components/Modal.svelte";
  import AddPlayerForm from './Components/AddPlayerForm.svelte'

  let showModal = false;
  let showAddModal = false;
  let selectedPlayer = {};

  let players = [
    { id: 0, name: "hoge", color: "green", classes: "mage", hp: 50 },
    { id: 1, name: "boke", color: "orange", classes: "crusader", hp: 50 },
    { id: 2, name: "moge", color: "pink", classes: "priest", hp: 50 },
  ];

  const addPlayer = (e) => {
    //svelte cannot recognize this to update data
    // players.push(e.detail.addPlayer)
    players = [...players, e.detail]
  }

  const handleAddPlayer = () => {
    showAddModal = !showAddModal
  }
  
  const toggleAddPlayerModal = () => {
    showAddModal = !showAddModal
  }

  const handleDelete = (id) => {
    players = players.filter((p) => p.id !== id);
    showModal = !showModal
  };

  const toggleModal = (u) => {
    selectedPlayer = u
    // message = `⚠️ Are you sure you want to delete ${u.name}?!`;
    showModal = !showModal;
  };
</script>

<Modal
  isPromo={true}
  {selectedPlayer}
  {showModal}
  on:click={toggleModal}
>
  <h3>⚠️ Are you sure you want to delete <b style="color:yellow">{selectedPlayer.name}</b>?!</h3>
  <button on:click={toggleModal}>Cancel</button>
  <button on:click={() => handleDelete(selectedPlayer.id)}>Proceed</button>
</Modal>

<Modal showModal={showAddModal} on:click={toggleAddPlayerModal}>
  <AddPlayerForm on:addPlayer={addPlayer} />
</Modal>

<main>
  <button on:click={handleAddPlayer}>Add A New Player</button>
  {#each players as player (player.id)}
    <div>
      <h4 style="color:{player.color}">{player.name}</h4>
      <p>{player.classes}</p>
      <button on:click={() => toggleModal(player)}>Delete</button>
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
