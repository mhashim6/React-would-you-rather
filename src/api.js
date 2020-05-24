import * as Database from "./utils/_DATA"

export const getAllUsers = () => Database._getUsers()

export const getAllPolls = () => Database._getQuestions()

export const getAllData = () => Promise.all([getAllUsers(), getAllPolls()])
    .then(([users, polls]) => ({
        users,
        polls
    })
    )
export const savePoll = poll => Database._saveQuestion(poll)

export const answerPoll = ({ authedUser, qid, answer }) => Database._saveQuestionAnswer({ authedUser, qid, answer })