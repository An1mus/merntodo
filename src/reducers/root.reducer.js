import { combineReducers } from 'redux';

import { userLogin } from './user.reducer';
import { todoUpdate } from "./todo.reducer";

const rootReducer = combineReducers({
	userLogin,
	todoUpdate
});

export default rootReducer;
