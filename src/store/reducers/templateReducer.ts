import { SET_ITEM } from '../actions/types';

export default function (state = null, action: any) {
	switch (action.type) {
		case SET_ITEM:
			return action.payload;
		default:
			return state;
	}
}
