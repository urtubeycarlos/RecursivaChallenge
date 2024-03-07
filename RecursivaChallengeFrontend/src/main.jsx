import React from 'react';
import ReactDOM from 'react-dom/client';
import { Provider } from 'react-redux';
import store from './modules/index.js';
import App from './App.jsx';
import './index.css';

const app = (
	<Provider store={store}>
		<App />
	</Provider>
);

ReactDOM.createRoot(document.getElementById('root')).render(app);
