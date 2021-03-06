import { createStore, applyMiddleware, combineReducers } from 'redux'
import { persistStore, persistReducer } from 'redux-persist'
import storage from 'redux-persist/lib/storage'
import reduxThunk from 'redux-thunk'

import templateReducer from './templateReducer'
import authReducer from './authReducer'

const persistConfig = {
  key: 'root',
  storage,
}

const rootReducer = combineReducers({
  template: templateReducer,
  auth: authReducer,
})

const persistedReducer = persistReducer(persistConfig, rootReducer)

const configureStore = () => {
  let store = createStore(persistedReducer, {}, applyMiddleware(reduxThunk))
  let persistor = persistStore(store)
  return { store, persistor }
}

export default configureStore
