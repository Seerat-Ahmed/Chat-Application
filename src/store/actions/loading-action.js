import constant from '../constants';


export default function(user, isLoggedIn) {
    const action =  {
        type: constant.LOADING,
        payload: {
            user: user,
            isLoggedIn: isLoggedIn,
        }
    }
    return action;
}