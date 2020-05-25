import { showLoading, hideLoading } from "react-redux-loading";

import { loadUsers, addAnswerToUser, addPollToUser } from "./users"
import { loadPolls, addAnswerToPoll, addNewPoll } from "./polls"

import { getAllData, answerPoll, savePoll } from "../api"

export const ANSWER_POLL = 'ANSWER_POLL'

export const loadInitialData = () => dispatch => {
    dispatch(showLoading())
    return getAllData().then(({ users, polls }) => {
        dispatch(loadUsers(users))
        dispatch(loadPolls(polls))
        dispatch(hideLoading())
    })
}

export const chooseOption = ({ qid, selectedOption }) => (dispatch, getState) => {
    const { authedUser } = getState()
    return answerPoll({ authedUser, qid, answer: selectedOption }).then(() => {
        dispatch(addAnswerToPoll({
            authedUser,
            qid,
            selectedOption,
        }))
        dispatch(addAnswerToUser({
            authedUser,
            qid,
            selectedOption,
        }))
    })
}

export const createNewPoll = ({ optionOneText, optionTwoText }) => (dispatch, getState) => {
    const { authedUser } = getState()
    return savePoll({ author: authedUser, optionOneText, optionTwoText }).then((poll) => {
        dispatch(addNewPoll({ author: authedUser, qid: poll.id, timestamp: poll.timestamp, optionOne: optionOneText, optionTwo: optionTwoText }))
        dispatch(addPollToUser({ author: authedUser, qid: poll.id }))
    })
}