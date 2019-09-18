import { userConstants } from '../constants/user.constants';

let user = JSON.parse(localStorage.getItem('user'));
const initialState = user ? { loggedIn: true, user } : {};

export function userLogin(state = initialState, action) {
	switch (action.type) {
		case userConstants.LOGOUT:
			return {};
		case userConstants.LOGIN:
			return {
				user: action.user,
				loggingIn: true,
			};
		case userConstants.LOGIN_SUCCESS:
			return {
				user: action.user,
				loggedIn: true,
			};
		case userConstants.LOGIN_FAILURE:
			return {};
		default:
			return state
	}
}
