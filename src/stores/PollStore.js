import { writable } from 'svelte/store'
import newUniqueId from 'locally-unique-id-generator'

const PollStore = writable([
    {
        id: newUniqueId(),
        question: 'Which sushi types do you eat frequently?',
        answerA: 'Maguro',
        answerB: 'Chirashi',
        votesA: 0,
        votesB: 0,
    },
    {
        id: newUniqueId(),
        question: 'How often do you eat sushi?',
        answerA: 'Never',
        answerB: 'Once a month',
        votesA: 0,
        votesB: 0,
    },
])

export default PollStore