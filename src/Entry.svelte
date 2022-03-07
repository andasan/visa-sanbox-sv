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

  let polls = [];

  const handleAddPoll = (e) => {
    polls = [e.detail, ...polls];
    activeItem = "Current Polls";
  };
  const handleVote = (e) => {
    const { id, option } = e.detail;

    let pollCopy = [...polls];
    let upVotedPoll = pollCopy.find((poll) => poll.id === id);

    if (option === "A") {
      upVotedPoll.votesA++;
    }

    if (option === "B") {
      upVotedPoll.votesB++;
    }

    polls = [...pollCopy];
  };
</script>

<Header />
<main>
  <Tabs {tabItems} {activeItem} on:tabChange={handleTabChange} />
  {#if activeItem === "Current Polls"}
    <PollList {polls} on:vote={handleVote} />
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
