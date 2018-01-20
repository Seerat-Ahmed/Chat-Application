import { combineReducers } from 'redux';
import counter from '../reducers/counter-reducer';
import loadingReducer from './loading-reducer';

export default combineReducers({
    counter: counter,
    loadUser: loadingReducer
});