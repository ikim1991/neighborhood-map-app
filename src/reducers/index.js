import { combineReducers } from 'redux'
import mapReducer from './mapReducer'
import fetchReducer from './fetchReducer'

const rootReducer = combineReducers({
  mapReducer: mapReducer,
  fetchReducer: fetchReducer
})

export default rootReducer;
