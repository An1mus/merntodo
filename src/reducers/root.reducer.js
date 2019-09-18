import { combineReducers } from 'redux';

import { userLogin } from './user.reducer';

const rootReducer = combineReducers({
	userLogin,
});

export default rootReducer;
