/* eslint-disable */

import {
  LOGIN_USER,
  LOGIN_USER_SUCCESS,
  LOGIN_USER_FAIL,
  LOGOUT_USER,
  FETCH_USER_PROFILE,
  FETCH_USER_PROFILE_SUCCESS,
  FETCH_USER_PROFILE_FAIL,
  SET_USER_PROFILE_SUCCESS
} from './types'
import firebase from 'firebase'

export const setUserProfile = (history: any, data: any) => {
  return async (dispatch: any) => {
    const { currentUser }: { currentUser: any } = firebase.auth()
    const db = firebase.firestore()
    const ref = db.collection('users').doc(currentUser.uid)

    await ref.set(data)
    history.push('/')
    dispatch({ type: SET_USER_PROFILE_SUCCESS })
  }
}

export const loginUser = (history: any) => {
  return async (dispatch: any) => {
    dispatch({ type: LOGIN_USER })

    const provider = new firebase.auth.GoogleAuthProvider()

    const user = await firebase.auth().signInWithPopup(provider)
    try {
      const { currentUser }: { currentUser: any } = firebase.auth()
      const db = firebase.firestore()
      const ref = db.collection('users').doc(currentUser.uid)

      const doc = await ref.get()
      if (!doc.exists) {
        // redirect to create profile
        history.push('/profile/edit')
      }

      loginUserSuccess(dispatch, user)
    } catch (error) {
      loginUserFail(dispatch)
    }
  }
}

const loginUserSuccess = (dispatch: any, user: any) => {
  dispatch({
    type: LOGIN_USER_SUCCESS,
    payload: user,
  })
}

const loginUserFail = (dispatch: any) => {
  dispatch({
    type: LOGIN_USER_FAIL,
  })
}

export const logoutUser = () => async (dispatch: any) => {
  firebase.auth().signOut()
  dispatch({ type: LOGOUT_USER })
}

export const fetchUserProfile = () => {
  return async (dispatch: any) => {
    dispatch({ type: FETCH_USER_PROFILE })

    try {
      const { currentUser }: { currentUser: any } = await firebase.auth()
      const db = firebase.firestore()
      const ref = db.collection('users').doc(currentUser.uid)

      const doc = await ref.get()
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
