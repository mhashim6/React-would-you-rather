import { LOAD_USERS, ADD_QUESTION_TO_USER } from "../actions/users"

const users = (state = {}, action) => {
    switch (action.type) {
        case LOAD_USERS: return action.users
        case ADD_QUESTION_TO_USER:
            const { authedUser, qid, selectedOption } = action
            const user = state[authedUser]
            return { ...state, [authedUser]: { ...user, answers: { ...user.answers, [qid]: selectedOption } } }
        default: return state
    }
}

export default users