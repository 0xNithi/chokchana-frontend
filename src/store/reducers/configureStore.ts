import { createStore, applyMiddleware, combineReducers } from 'redux'
import { persistStore, persistReducer } from 'redux-persist'
import storage from 'redux-persist/lib/storage'
import reduxThunk from 'redux-thunk'

import templateReducer from './templateReducer'

const persistConfig = {
  key: 'root',
  storage,
}

const rootReducer = combineReducers({
  template: templateReducer,
})

const persistedReducer = persistReducer(persistConfig, rootReducer)

export default () => {
  let store = createStore(persistedReducer, {}, applyMiddleware(reduxThunk))
  let persistor = persistStore(store)
  return { store, persistor }
}
