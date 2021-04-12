import { SET_ITEM } from '../actions/types';

const initialState = {
	text: null
}

export default function (state = initialState, action: any) {
	switch (action.type) {
		case SET_ITEM:
			console.log('set item (reducers) is called');
			return { ...state, text: action.payload};
		default:
			return state;
	}
}
