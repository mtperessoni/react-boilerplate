import React from 'react'
import ReactDOM from 'react-dom'
import { Provider } from 'react-redux'
import { PersistGate } from 'redux-persist/integration/react'
import './styles/index.scss'
import Container from 'containers'
import configureStore from './store/configureStore'

const { store, persistor } = configureStore()

ReactDOM.render(
  <Provider store={ store }>
    <PersistGate loading={ null } persistor={ persistor }>
      <Container store={ store } />
    </PersistGate>
  </Provider>,
  document.getElementById('root')
)
