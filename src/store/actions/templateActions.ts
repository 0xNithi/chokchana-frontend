import { SET_ITEM } from './types';

export const setItem = (item: any) => async (dispatch: any) => {
	dispatch({ type: SET_ITEM, item: item });
};