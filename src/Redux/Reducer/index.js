import { combineReducers } from 'redux'

import accountReducer from './accountReducer'
import appReducer from './appReducer'

const rootReducer = combineReducers({
  accoount:accountReducer,
  app: appReducer
})
export default rootReducer
