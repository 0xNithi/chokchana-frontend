import { SET_ITEM } from './types'

export const setItem = (item: any) => async (dispatch: any) => {
  console.log('Set item is called')
  dispatch({ type: SET_ITEM, payload: item })
}
