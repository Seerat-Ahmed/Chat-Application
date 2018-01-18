import constant from '../constants';

export default function() {

    let action = {
        type: constant.counter,
        payload: 2,
    }

    return action;
}