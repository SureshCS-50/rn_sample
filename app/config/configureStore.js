import { createStore, applyMiddleware, compose } from 'redux'
import { createLogger } from 'redux-logger'
import reducers from './../reducers/index'
import RootInitialState from './../reducers/root/initialState'

// middleware that logs actions
const loggerMiddleware = createLogger({ predicate: (getState, action) => __DEV__ });

function getInitialState() {
    const _initState = {
      root: new RootInitialState()
    }
    console.log('intial_state', _initState);
    return _initState
}

const enhancer = compose(
    applyMiddleware(
      loggerMiddleware
    )
)

function configureStore(state = getInitialState()) {
    const store = createStore(
      reducers,
      state,
      enhancer
    )
    return store;
};
  
export const store = configureStore();