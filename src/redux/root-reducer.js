import { combineReducers } from 'redux'

import apiDataReducer from './api-data/api-data.reducer'

export default combineReducers({
	api: apiDataReducer
})