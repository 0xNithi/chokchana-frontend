import {
  LOGIN_USER,
  LOGIN_USER_SUCCESS,
  LOGOUT_USER,
  FETCH_USER_PROFILE,
  FETCH_USER_PROFILE_FAIL,
  FETCH_USER_PROFILE_SUCCESS,
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
  console.log(action)
  switch (action.type) {
    case LOGIN_USER:
      return { ...state, loading: true, error: '' }
    case LOGOUT_USER:
      return { ...state, user: null }
    case LOGIN_USER_SUCCESS:
      const user: any = action.payload
      return { ...state, ...initialState, user: user.user }

    case FETCH_USER_PROFILE:
      return { ...state, loading: true, error: '' }
    case FETCH_USER_PROFILE_FAIL:
      return { ...state, profile: null }
    case FETCH_USER_PROFILE_SUCCESS:
      const profile: any = action.payload
      console.log(profile)
      return { ...state, profile }
    default:
      return state
  }
}
