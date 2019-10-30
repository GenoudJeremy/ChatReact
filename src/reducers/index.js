import { combineReducers } from 'redux'
import messages from './addMessage'
import log from "./Log";

export default combineReducers({
    messages, log,
})
