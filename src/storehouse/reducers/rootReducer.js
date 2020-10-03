import { combineReducers } from 'redux'

import menusReducer from './menus/rootReducer'
import adminReducer from './admin/rootReducer'

export default combineReducers({
    menus: menusReducer,
    admin: adminReducer
})