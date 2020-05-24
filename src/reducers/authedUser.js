import { CHANGE_AUTHED_USER } from "../actions/authedUser"

const authedUser = ( state = 'johndoe', action ) => { //TODO: null
    switch (action.type) {
        case CHANGE_AUTHED_USER: return action.authedUser
        default: return state
    }
}

export default authedUser