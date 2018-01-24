import constant from '../constants';

export default (state = [], action) => {
    switch (action.type) {
        case constant.GET_CHAT_MESSAGES:
            let chat = [
                ...state, {
                    message: action.payload.message,
                    key: action.payload.key,
                }
            ]
            return chat;
        case constant.CLEAR_CHAT_MESSAGES:
            return [];
        default:
            return state;
    }
};