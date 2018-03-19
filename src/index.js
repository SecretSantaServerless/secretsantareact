import React from 'react';
import { render } from 'react-dom';
import configureStore from './configureStore';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';

const store = configureStore();

render(<App store={store} />, document.getElementById('root'));
registerServiceWorker();
