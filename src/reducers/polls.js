import { LOAD_POLLS, ADD_ANSWER_TO_POLL, ADD_NEW_POLL } from "../actions/polls"

const polls = (state = {}, action) => {
    switch (action.type) {
        case LOAD_POLLS: return action.polls
        case ADD_ANSWER_TO_POLL:{
            const { authedUser, qid, selectedOption } = action
            const poll = state[qid]
            const answer = poll[selectedOption]
            return {
                ...state,
                [qid]: {
                    ...poll,
                    [selectedOption]: { ...answer, votes: answer.votes.concat(authedUser) }
                }
            }}
        case ADD_NEW_POLL: {
            const { author, qid, timestamp, optionOne, optionTwo } = action.poll
            return {
                ...state,
                [qid]: {
                    id: qid, timestamp, author,
                    optionOne: { text: optionOne, votes: [] },
                    optionTwo: { text: optionTwo, votes: [] }
                }
            }}
        default: return state
    }
}

export default polls