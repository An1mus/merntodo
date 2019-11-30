import { userConstants } from '../constants/user.constants';
import { userService } from '../services/user.service';
import { history } from '../helpers/history';

export const userActions = {
	login,
	logout,
	registrate,
};

function login(username, password) {
	return async dispatch => {
		function request(user) {
			dispatch({ type: userConstants.LOGIN_REQUEST, payload: user });
		}
		function success(user) {
			dispatch({ type: userConstants.LOGIN_SUCCESS, payload: user });
			history.push('/');
			return user;
		}
		function error(error) {
			dispatch({ type: userConstants.LOGIN_FAILURE, payload: error });
			return error;
		}
		try {
			request({username, password});
			const result = await userService.login(username, password);
			return success(result);
		} catch (e) {
			return error(e);
		}
	}
}

function registrate(username, password) {
	return async dispatch => {
		function onSuccess(success) {
			dispatch({ type: userConstants.REGISTRATION_SUCCESS, payload: success });
			history.push('/');
			return success;
		}
		function onError(error) {
			dispatch({ type: userConstants.REGISTRATION_FAILURE, payload: error });
			return error;
		}
		try {
			const success = await userService.registrate(username, password);
			return onSuccess(success);
		} catch (error) {
			return onError(error);
		}
	}
}

function logout() {
	userService.logout();
	return { type: userConstants.LOGOUT };
}
