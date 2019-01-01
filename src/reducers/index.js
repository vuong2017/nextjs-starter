import { combineReducers } from 'redux-immutable'
import { Map } from 'immutable'

import home from './home'

export const intitialState = Map()

const appReducer = combineReducers({
    home,
})

const rootReducer = (state, action) => {
    return appReducer(state, action)
}

export default rootReducer 