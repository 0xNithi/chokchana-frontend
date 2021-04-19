import { LOGIN_USER, LOGIN_USER_SUCCESS } from '../actions/types';

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
        case LOGIN_USER_SUCCESS:
            const user: any = action.payload;
            return { ...state, ...initialState, user: user.user };
        default:
            return state;
    }
}