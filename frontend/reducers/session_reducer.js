import {
  RECEIVE_CURRENT_USER,
  LOGOUT
} from '../actions/session_actions';
// import merge from 'lodash/merge';


const defaultSessionState = {
  currentUser: null
};

const SessionReducer = (oldState = defaultSessionState, action) => {
  switch (action.type) {
    case RECEIVE_CURRENT_USER:
      return Object.assign({}, oldState, { currentUser: action.currentUser });
    case LOGOUT:
      return defaultSessionState;
    default:
      return oldState;
  }
};

export default SessionReducer;
