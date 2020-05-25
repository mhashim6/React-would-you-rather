export const LOAD_USERS = 'LOAD_USERS'
export const ADD_ANSWER_TO_USER = 'ADD_ANSWER_TO_USER'
export const ADD_POLL_TO_USER = 'ADD_POLL_TO_USER'

export const loadUsers = users => ({
    type: LOAD_USERS,
    users
})

export const addAnswerToUser = ({ authedUser, qid, selectedOption }) => ({
    type: ADD_ANSWER_TO_USER,
    authedUser,
    qid,
    selectedOption,
})

export const addPollToUser = poll => ({
    type: ADD_POLL_TO_USER,
    poll
})