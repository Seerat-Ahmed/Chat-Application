import { combineReducers } from 'redux';
import counter from '../reducers/counter-reducer';

export default combineReducers({
    counter: counter,
});