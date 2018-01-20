import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
// import 'jquery/dist/jquery.slim';   
import 'bootstrap/dist/css/bootstrap.css';
// import 'bootstrap-jquery/dist/js/bootstrap.js';
import { Provider } from 'react-redux';
import store from './store';
import config from './config/firebase-config';
import registerServiceWorker from './registerServiceWorker';
import MyRoutes from './components/MyRoutes/MyRoutes';
import * as firebase  from 'firebase';

firebase.initializeApp(config);

ReactDOM.render(
    <Provider store = { store } >
        <MyRoutes />
    </Provider>
    , document.getElementById('root'));
registerServiceWorker();
