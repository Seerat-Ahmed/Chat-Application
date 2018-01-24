import constant from '../constants';

export function _getChatMessages(message, key) {
    const action = {
        type: constant.GET_CHAT_MESSAGES,
        payload: {
            message: message,
            key: key,
        }
    }

    return action;
}


export function _clearChatMessages() {
    const action = {
        type: constant.CLEAR_CHAT_MESSAGES,
    }

    return action;
}