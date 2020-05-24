import { LOAD_POLLS, ADD_ANSWER_TO_POLL } from "../actions/polls"

const polls = (state = {}, action) => {
    switch (action.type) {
        case LOAD_POLLS: return action.polls
        case ADD_ANSWER_TO_POLL:
            const { authedUser, qid, selectedOption } = action
            const poll = state[qid]
            const answer = poll[selectedOption]
            return { ...state, [qid]: { ...poll, [selectedOption]: { ...answer, votes: answer.votes.concat(authedUser) } } }
        default: return state
    }
}

export default polls