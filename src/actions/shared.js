import { showLoading, hideLoading } from "react-redux-loading";

import { loadUsers, addQuestionToUser } from "./users"
import { loadPolls, addAnswerToPoll } from "./polls"

import { getAllData, answerPoll } from "../api"

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
        dispatch(addQuestionToUser({
            authedUser,
            qid,
            selectedOption,
        }))
    })
}