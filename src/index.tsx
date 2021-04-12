import React from 'react';
import ReactDOM from 'react-dom';

import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';

import configureStore from './store/reducers/configureStore';
import App from './App';
import ContextProvider from './contexts/ProviderComposer';
import './style/index.css';

const { store, persistor } = configureStore();

ReactDOM.render(
	<React.StrictMode>
		<Provider store={store}>
			<PersistGate loading={null} persistor={persistor}>
				<ContextProvider>
					<App />
				</ContextProvider>
			</PersistGate>
		</Provider>
	</React.StrictMode>,
	document.getElementById('root')
);
