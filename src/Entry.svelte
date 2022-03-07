<script>
  import Header from "./components/layout/Header.svelte";
  import Footer from "./components/layout/Footer.svelte";
  import Tabs from "./components/widgets/tabs/Tabs.svelte";
  import CreatePollForm from "./components/modules/polls/CreatePollForm.svelte";
  import PollList from "./components/modules/polls/PollList.svelte";

  let tabItems = ["Current Polls", "Add New Poll"];
  let activeItem = "Current Polls";

  const handleTabChange = (e) => {
    activeItem = e.detail;
  };

  const handleAddPoll = (e) => {
    // polls = [e.detail, ...polls];
    activeItem = "Current Polls";
  };
</script>

<Header />
<main>
  <Tabs {tabItems} {activeItem} on:tabChange={handleTabChange} />
  {#if activeItem === "Current Polls"}
    <PollList />
  {:else if activeItem === "Add New Poll"}
    <CreatePollForm on:addPoll={handleAddPoll} />
  {/if}
</main>
<Footer />

<style>
  main {
    /* max-width: 960px; */
    max-width: 400px;
    margin: 40px auto;
  }
</style>
