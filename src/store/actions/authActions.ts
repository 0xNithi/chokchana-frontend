/* eslint-disable */

import {
  LOGIN_USER,
  LOGIN_USER_SUCCESS,
  LOGIN_USER_FAIL,
  LOGOUT_USER,
  FETCH_USER_PROFILE,
  FETCH_USER_PROFILE_SUCCESS,
  FETCH_USER_PROFILE_FAIL,
  EDIT_USER_PROFILE,
} from './types'
import firebase from 'firebase'

export const setUserProfile = (history: any, data: any) => {
  return async (dispatch: any) => {
    const { currentUser }: { currentUser: any } = firebase.auth()
    const db = firebase.firestore()
    const ref = db.collection('users').doc(currentUser.uid)

    await ref.set(data)
    const profileData = await ref.get()

    history.push('/')
    dispatch({ type: EDIT_USER_PROFILE, payload: { ...currentUser, ...profileData.data() } })
  }
}

export const logoutUser = () => async (dispatch: any) => {
  firebase.auth().signOut()
  dispatch({ type: LOGOUT_USER })
}

export const fetchUserProfile = (userId: string) => {
  return async (dispatch: any) => {
    dispatch({ type: FETCH_USER_PROFILE })

    try {
      // const { currentUser }: { currentUser: any } = firebase.auth()
      const db = firebase.firestore()
      const ref = db.collection('users').doc(userId)

      const doc = await ref.get()

      console.log(doc)
      if (!doc.exists) {
        fetchUserProfileFail(dispatch)
      } else {
        const data = doc.data()
        fetchUserProfileSuccess(dispatch, data)
      }
    } catch (error) {
      console.error(error.message)
      fetchUserProfileFail(dispatch)
    }
  }
}

const fetchUserProfileFail = (dispatch: any) => {
  dispatch({
    type: FETCH_USER_PROFILE_FAIL,
  })
}

const fetchUserProfileSuccess = (dispatch: any, data: any) => {
  dispatch({
    type: FETCH_USER_PROFILE_SUCCESS,
    payload: data,
  })
}
