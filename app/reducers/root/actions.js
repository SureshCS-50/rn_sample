const {
    INCREMENT,
    DECREMENT
} = require('./../../utils/constants').actions;

export function increment(payload){
    return {
        type: INCREMENT,
        payload: payload
    }
}

export function decrement(payload){
    return {
        type: DECREMENT,
        payload: payload
    }
}