export const CHANGE_AUTHED_USER = 'CHANGE_AUTHED_USER'

export const changeUser = authedUser => ({
    type: CHANGE_AUTHED_USER,
    authedUser
})