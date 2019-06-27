import { createStore, applyMiddleware, compose } from 'redux'
import { persistStore, persistReducer } from 'redux-persist'
import storage from 'redux-persist/lib/storage'
import createDebounce from 'redux-debounced'
import thunk from 'redux-thunk'

import { refreshMiddleware } from 'middleware/refreshMiddleware'
import rootReducer from 'reducers'

// reducers que devem ser persistidos
const persistConfig = {
  key: 'onidata',
  whitelist: ['auth', 'user'],
  storage,
}
const enhancer = compose(
  applyMiddleware(refreshMiddleware, createDebounce(), thunk)
)

export default function configureStore(initialState) {
  const persistedReducer = persistReducer(persistConfig, rootReducer)
  const store = createStore(persistedReducer, initialState, enhancer)
  const persistor = persistStore(store)
  return { store, persistor }
}
