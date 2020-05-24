export const LOAD_POLLS = 'LOAD_POLLS'
export const ADD_ANSWER_TO_POLL = 'ADD_ANSWER_TO_POLL'

export const loadPolls = polls => ({
    type: LOAD_POLLS,
    polls
})

export const addAnswerToPoll = ({ authedUser, qid, selectedOption }) => ({
    type: ADD_ANSWER_TO_POLL,
    authedUser,
    qid,
    selectedOption,
})
