import { combineReducers } from 'redux'
import account from './accountReducer'
import dish from './dishReducer'
import app from './appReducer'

const rootReducer = combineReducers({
  account,
  app,
  dish
})

export default rootReducer
