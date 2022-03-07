<script>
  // import { createEventDispatcher } from "svelte";

  import PollStore from "../../../stores/PollStore";
  import Card from "../cards/Card.svelte";
  export let poll;

  // const dispatch = createEventDispatcher();

  $: totalVotes = poll.votesA + poll.votesB;
  $: percentA = Math.floor((100 / totalVotes) * poll.votesA);
  $: percentB = Math.floor((100 / totalVotes) * poll.votesB);

  const handleVote = (option, id) => {
    // dispatch("vote", { option, id });
    PollStore.update((prevPoll) => {
      let pollCopy = [...prevPoll];
      let upVotedPoll = pollCopy.find((poll) => poll.id === id);

      if (option === "A") {
        upVotedPoll.votesA++;
      }

      if (option === "B") {
        upVotedPoll.votesB++;
      }

      return pollCopy
    });
  };
</script>

<Card>
  <div class="poll">
    <h3>{poll.question}</h3>
    <p>Total Votes: {totalVotes}</p>
    <div class="answer" on:click={() => handleVote("A", poll.id)}>
      <div class="percent percent-a" style="width: {percentA}%" />
      <span>{poll.answerA} ({poll.votesA})</span>
    </div>
    <div class="answer" on:click={() => handleVote("B", poll.id)}>
      <div class="percent percent-b" style="width: {percentB}%" />
      <span>{poll.answerB} ({poll.votesB})</span>
    </div>
  </div>
</Card>

<style>
  h3 {
    margin: 0 auto;
    color: #555;
  }
  p {
    margin-top: 6px;
    margin-bottom: 30px;
    font-size: 14px;
    color: #aaa;
  }
  .answer {
    background-color: #fafafa;
    cursor: pointer;
    margin: 10px auto;
    position: relative;
  }

  .answer:hover {
    opacity: 0.6;
  }
  span {
    display: inline-block;
    padding: 10px 20px;
  }

  .percent {
    height: 100%;
    position: absolute;
    box-sizing: border-box;
  }

  .percent-a {
    background-color: rgba(217, 27, 66, 0.2);
    border-left: 4px solid #d91b42;
  }
  .percent-b {
    background-color: rgba(69, 196, 150, 0.2);
    border-left: 4px solid #45c496;
  }
</style>
