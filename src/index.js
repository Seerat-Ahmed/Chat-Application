import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import 'bootstrap/dist/css/bootstrap.css';
import { Provider } from 'react-redux';
import store from './store';
import registerServiceWorker from './registerServiceWorker';
import { Router } from 'react-router';
import MyRoutes from './components/MyRoutes/MyRoutes';

ReactDOM.render(
    <Provider store = { store } >
                <MyRoutes />
    </Provider>
    , document.getElementById('root'));
registerServiceWorker();
