import { createStore } from 'redux'
import { persistStore, persistReducer } from 'redux-persist'
import storage from 'redux-persist/lib/storage'

function vollRedux(
  state = {
    products: {}
  },
  action
) {
  switch (action.type) {
    case 'SET_REQUESTED_PRODUCTS':
      return {
        ...state,
        products: action.payload
      }

    default:
      return state
  }
}

const persistConfig = {
  key: 'root',
  storage,
  blacklist: []
}

const persistedReducer = persistReducer(persistConfig, vollRedux)

const store = createStore(persistedReducer)
const persistor = persistStore(store)

export { store, persistor }
