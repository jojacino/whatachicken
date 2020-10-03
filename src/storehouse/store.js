import { applyMiddleware, compose, createStore } from 'redux'
import rootReducer from './reducers/rootReducer'
import { canJSON } from './constants/methods'
import { createLogger } from 'redux-logger'

/** Custom Redux Middleware */
const parseJSON = store => next => action => {
    if (canJSON(action.payload)) {
        action.payload = JSON.parse(action.payload)
    }
    return next(action)
}

// middleware array
const middleware = []

/** Export Store Configuration */
export const configureStore = (state) => {
    // conditional middlware
    if (process.env.NODE_ENV === 'development') {
        middleware.push(createLogger())
    }
    // applied middleware
    middleware.push(parseJSON)

    // return store
    return createStore(rootReducer, state, compose(applyMiddleware(...middleware)))
}