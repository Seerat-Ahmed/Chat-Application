import { combineReducers } from 'redux';
import loader from '../reducers/main-loader-reducer';
export default combineReducers({
    /* ********** Reducer for dispatching main loader actions ********** */
    isLoading: loader,
});