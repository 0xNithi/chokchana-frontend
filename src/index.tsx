import React from 'react'
import ReactDOM from 'react-dom'
import { Provider } from 'react-redux'
import { PersistGate } from 'redux-persist/integration/react'
import configureStore from './store/reducers/configureStore'
import { ChainId, DAppProvider } from '@usedapp/core'
import App from './App'
import ContextProvider from './contexts/ProviderComposer'
import './style/index.css'

const { store, persistor } = configureStore()

const config = {
  readOnlyChainId: ChainId.Mainnet,
  readOnlyUrls: {
    [ChainId.Mainnet]: 'https://mainnet.infura.io/v3/62687d1a985d4508b2b7a24827551934',
  },
}

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <ContextProvider>
          <DAppProvider config={config}>
            <App />
          </DAppProvider>
        </ContextProvider>
      </PersistGate>
    </Provider>
  </React.StrictMode>,
  document.getElementById('root'),
)
