/* eslint-disable */

import {
  LOGIN_USER,
  LOGIN_USER_SUCCESS,
  LOGIN_USER_FAIL,
  LOGOUT_USER,
  FETCH_USER_PROFILE,
  FETCH_USER_PROFILE_SUCCESS,
  FETCH_USER_PROFILE_FAIL,
} from './types'
import firebase from 'firebase'

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
        history.push('/profile/edit')
        // redirect to create profile
        console.log('No such document!')
      } else {
        console.log('Document data:', doc.data())
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

export const fetchUserProfile = (history: any) => {
  return async (dispatch: any) => {
    dispatch({ type: FETCH_USER_PROFILE })

    try {
      const { currentUser }: { currentUser: any } = firebase.auth()
      const db = firebase.firestore()
      const ref = db.collection('users').doc(currentUser.uid)

      const doc = await ref.get()
      if (!doc.exists) {
        dispatch({
          type: FETCH_USER_PROFILE_SUCCESS,
          payload: {},
        })
      } else {
        const data = doc.data();
        dispatch({
          type: FETCH_USER_PROFILE_SUCCESS,
          payload: data,
        })
      }
    } catch (error) {
      dispatch({
        type: FETCH_USER_PROFILE_FAIL,
        payload: {},
      })
    }
  }
}
