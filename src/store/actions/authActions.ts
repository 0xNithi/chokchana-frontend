/* eslint-disable */

import { LOGIN_USER, LOGIN_USER_SUCCESS, LOGIN_USER_FAIL } from './types';
import firebase from 'firebase';

export const loginUser = () => {
	return async (dispatch: any) => {
		dispatch({ type: LOGIN_USER });

		const provider = new firebase.auth.GoogleAuthProvider();

		const user = await firebase.auth().signInWithPopup(provider)
		try {
			const { currentUser }: { currentUser: any } = firebase.auth();
			const db = firebase.firestore();
			const ref = db.collection('users').doc(currentUser.uid);

			const doc = await ref.get();
			if (!doc.exists) {
				// redirect to create profile
				console.log('No such document!');
			} else {
				console.log('Document data:', doc.data());
			}

			loginUserSuccess(dispatch, user);
		} catch (error) {
			loginUserFail(dispatch);
		}  
	};
};

const loginUserSuccess = (dispatch: any, user: any) => {
	dispatch({
		type: LOGIN_USER_SUCCESS,
		payload: user,
	});
};

const loginUserFail = (dispatch: any) => {
	dispatch({
		type: LOGIN_USER_FAIL,
	});
};
