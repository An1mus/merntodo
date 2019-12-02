import { userConstants } from '../constants/user.constants';

let user = localStorage.getItem('user');
const initialState = user ? { loggedIn: true, user } : {};

export function userLogin(state = initialState, action) {
	switch (action.type) {
		case userConstants.LOGIN_REQUEST:
			return {
				user: action.payload,
				loggingIn: true,
			};
		case userConstants.LOGIN_SUCCESS:
			return {
				user: {...action.payload, theFieldToCheckTheState: 'The field to check the state' },
				loggedIn: true,
			};
		case userConstants.LOGIN_FAILURE:
			return {};
		case userConstants.REGISTRATION_SUCCESS:
			return {
				user: action.payload,
				loggedIn: true,
			};
		case userConstants.REGISTRATION_FAILURE:
			return {};
		case userConstants.LOGOUT:
			return {};
		default:
			return state
	}
}
