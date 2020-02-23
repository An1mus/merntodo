import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';

import App from './components/App';
import * as serviceWorker from './serviceWorker';
import store from './redux/store';

import './index.css';


ReactDOM.render(
    <Provider store={store}>
        <App />
    </Provider>
    , document.getElementById('root'));

serviceWorker.register();
