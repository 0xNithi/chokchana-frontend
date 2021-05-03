import { FETCH_USER, EDIT_USER_PROFILE, USER_LOGOUT } from '../actions/types'

const initialState = {
  user: null,
  profile: null,
}

const authReducer = (state = initialState, action: any) => {
  switch (action.type) {
    case FETCH_USER:
      return action.payload || false
    case EDIT_USER_PROFILE:
      if (action.payload) {
        return action.payload
      }
      return state
    case USER_LOGOUT:
      return false
    default:
      return state
  }
}

export default authReducer
