import constant from '../constants';

export default (state = {}, action ) => {
    switch(action.type) {
        case constant.SET_LOGIN_USER_INFO:
            return action.payload.user;
        case constant.CLEAR_LOGIN_USER:
            return '';
        default:
            return state;
    }
}