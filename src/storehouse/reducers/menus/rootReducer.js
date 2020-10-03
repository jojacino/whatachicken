import { combineReducers } from 'redux'

import menuMainReducer from './menuMainReducer'

export default combineReducers({
    main: menuMainReducer
})