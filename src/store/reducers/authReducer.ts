import { LOGIN_USER, LOGIN_USER_SUCCESS, LOGOUT_USER } from '../actions/types';

type User = {
    photoURL: string;
    email: string;
    displayName: string;
};

const initialState = {
    user: null,
};

export default function (state = initialState, action: any) {
    console.log(action);
    switch (action.type) {
        case LOGIN_USER:
            return { ...state, loading: true, error: '' };
        case LOGOUT_USER:
            return { ...state, user: null };
        case LOGIN_USER_SUCCESS:
            const user: any = action.payload;
            return { ...state, ...initialState, user: user.user };
        default:
            return state;
    }
}