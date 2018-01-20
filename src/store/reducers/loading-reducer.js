import constant from '../constants';

const initialState = {
    loading: true,
    user: null,
    isLoggedIn: false,
}
export default (state = initialState, action) => {

    switch (action.type) {
        case constant.LOADING:
            let loginState = false;
            let user = action.payload.user;

            if (user) {
                loginState = true;
               console.log('logged in');
            }
            else {
                console.log('logged out');
            }

            return {
                loading: false,
                isLoggedIn: loginState,
                user: user,
            }
        default:
            return state;
    }

}