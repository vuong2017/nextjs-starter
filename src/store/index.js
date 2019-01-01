import { createStore, applyMiddleware } from 'redux'
import { composeWithDevTools } from 'redux-devtools-extension'
import thunkMiddleware from 'redux-thunk'
import rootReducer, { intitialState } from '../reducers'

const configureStore = (state = intitialState) => {
    return createStore(
      rootReducer,
      state,
      composeWithDevTools(applyMiddleware(thunkMiddleware))
   )
}
  
export default configureStore