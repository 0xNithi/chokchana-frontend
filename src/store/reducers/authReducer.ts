import {
  LOGIN_USER,
  LOGIN_USER_SUCCESS,
  LOGOUT_USER,
  FETCH_USER_PROFILE,
  FETCH_USER_PROFILE_FAIL,
  FETCH_USER_PROFILE_SUCCESS,
  FETCH_USER
} from '../actions/types'

type User = {
  photoURL: string
  email: string
  displayName: string
}

const initialState = {
  user: null,
  profile: null,
}

export default function (state = initialState, action: any) {
  switch (action.type) {
    case FETCH_USER:
      return action.payload || false;
    default:
      return state
  }
}
