<script>
    import { createEventDispatcher } from 'svelte'
    const dispatch = createEventDispatcher()
    let fields = { question: '', answerA: '', answerB: ''}

    const submitHandler = () => {
        dispatch('submitForm', fields)
    }
</script>

<form on:submit|preventDefault={submitHandler}>
    <div class="form-field">
        <label for="question">Poll Question</label>
        <input type="text" name="question" id="question" bind:value={fields.question}>
    </div>
    <div class="form-field">
        <label for="answer-a">Answer A:</label>
        <input type="text" name="answer-a" id="answer-a" bind:value={fields.answerA}>
    </div>
    <div class="form-field">
        <label for="answer-b">Answer B:</label>
        <input type="text" name="answer-b" id="answer-b" bind:value={fields.answerB}>
    </div>
    <button>Add Poll</button>
</form>

<style>
    form{
        width: 400px;
        margin: 0 auto;
        text-align: center;
    }

    .form-field{
        margin: 18px auto;
    }

    label{
        margin: 10px auto;
        text-align: left;
    }

    input, button{
        width: 100%;
        border-radius: 6px;
    }
</style>
