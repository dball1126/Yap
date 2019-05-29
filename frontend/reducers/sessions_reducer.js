import { RECEIVE_CURRENT_USER, 
         LOGOUT_CURRENT_USER } from '../actions/session_actions';
import merge from 'lodash/merge';
const nullSession = {
    currentUser: null
}

const sessionReducer = (oldState = nullSession, action) => {       
    Object.freeze(oldState);

    switch (action.type) {
        case RECEIVE_CURRENT_USER:
            return merge({}, {currentUser: action.user})
        case LOGOUT_CURRENT_USER:
            return nullSession;
        default:
            return oldState;
    }
}

export default sessionReducer;