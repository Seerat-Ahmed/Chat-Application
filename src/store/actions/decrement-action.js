import constant from '../constants';

export default function() {
    
    let action = {
        type: constant.decrement,
        payload: 4,
    }

    return action;
}