export const LOAD_USERS = 'LOAD_USERS'
export const ADD_QUESTION_TO_USER = 'ADD_QUESTION_TO_USER'

export const loadUsers = users => ({
    type: LOAD_USERS,
    users
})

export const addQuestionToUser = ({ authedUser, qid, selectedOption }) => ({
    type: ADD_QUESTION_TO_USER,
    authedUser,
    qid,
    selectedOption,
})

