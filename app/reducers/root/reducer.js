import RootInitialState from './initialState';
// import { actions.INCREMENT as INCREMENT } from "./../../utils/constants";

const {
    INCREMENT,
    DECREMENT
} = require('./../../utils/constants').actions;

const {
    count
} = require('./../../utils/constants').keys;

const initialState = new RootInitialState();

export default function reducer(state = initialState, action) {
    if (!(state instanceof RootInitialState))
        return initialState.merge(state)

    switch(action.type){
        case INCREMENT:
            return state.set(count, action.payload);
        case DECREMENT:
            return state.set(count, action.payload);
    }
    return state;
}