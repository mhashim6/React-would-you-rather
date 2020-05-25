import { LOAD_USERS, ADD_ANSWER_TO_USER, ADD_POLL_TO_USER } from "../actions/users"

const users = (state = {}, action) => {
    switch (action.type) {
        case LOAD_USERS: return action.users
        case ADD_ANSWER_TO_USER: {
            const { authedUser, qid, selectedOption } = action
            const user = state[authedUser]
            return { ...state, [authedUser]: { ...user, answers: { ...user.answers, [qid]: selectedOption } } }
        }
        case ADD_POLL_TO_USER: {
            const { author, qid } = action.poll
            const user = state[author]
            return { ...state, [author]: { ...user, questions: user.questions.concat(qid) } }
        }
        default: return state
    }
}

export default users