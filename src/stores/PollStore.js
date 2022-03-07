import { writable } from 'svelte/store'
import newUniqueId from 'locally-unique-id-generator'

const PollStore = writable([
    {
        id: newUniqueId(),
        question: 'Would you rather live for the rest of your life in the Arctic or in the Sahara desert?',
        answerA: 'The Arctic',
        answerB: 'The Sahara desert',
        votesA: 0,
        votesB: 0,
    }
])

export default PollStore