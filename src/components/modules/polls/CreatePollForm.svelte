<script>
  import { createEventDispatcher } from "svelte";
  import { SvelteToast, toast } from "@zerodevx/svelte-toast";

  import Button from "../../widgets/button/Button.svelte";

  const dispatch = createEventDispatcher();

  const options = {
    position: "top-right",
  };

  let fields = { question: "", answerA: "", answerB: "" };
  let errors = { question: "", answerA: "", answerB: "" };
  let valid = false;

  const submitHandler = () => {
    valid = true;

    if (fields.question.trim().length < 5) {
      valid = false;
      errors.question = "Question must be at least 5 characters long";
    }

    if (fields.answerB.trim().length < 5) {
      valid = false;
      errors.answerB = "Answer B must be at least 5 characters long";
    }

    if (valid) {
      dispatch("submitForm", fields);
    } else {
      toast.push(
        `
            ${errors.question && "<p>" + errors.question + "</p>"}
            ${errors.answerA && "<p>" + errors.answerA + "</p>"}
            ${errors.answerB && "<p>" + errors.answerB + "</p>"}
        `,
        {
          theme: {
            "--toastBackground": "#F56565",
            "--toastBarBackground": "#C53030",
          },
        }
      );
      errors = { question: "", answerA: "", answerB: "" }
    }
  };
</script>

<SvelteToast {options} />
<form on:submit|preventDefault={submitHandler}>
  <div class="form-field">
    <label for="question">Poll Question</label>
    <input
      type="text"
      name="question"
      id="question"
      bind:value={fields.question}
    />
  </div>
  <div class="form-field">
    <label for="answer-a">Answer A:</label>
    <input
      type="text"
      name="answer-a"
      id="answer-a"
      bind:value={fields.answerA}
    />
  </div>
  <div class="form-field">
    <label for="answer-b">Answer B:</label>
    <input
      type="text"
      name="answer-b"
      id="answer-b"
      bind:value={fields.answerB}
    />
  </div>
  <Button flat={true}>Add Poll</Button>
</form>

<style>
  form {
    width: 400px;
    margin: 0 auto;
    text-align: center;
  }

  .form-field {
    margin: 18px auto;
  }

  label {
    margin: 10px auto;
    text-align: left;
  }

  input {
    width: 100%;
    border-radius: 6px;
  }
</style>
