import { userConstants } from '../constants/user.constants';
import { userService } from '../services/user.service';
import { history } from '../helpers/history';

export const userActions = {
	login,
	logout,
	registrate,
};

function login(username, password) {
	return dispatch => {
		dispatch(request({ username }));

		userService.login(username, password)
			.then(
				user => {
					dispatch(success(user));
					history.push('/');
				},
				error => {
					dispatch(failure(error));
				}
			);
	};

	function request(user) { return { type: userConstants.LOGIN, user } }
	function success(user) { return { type: userConstants.LOGIN_SUCCESS, user } }
	function failure(error) { return { type: userConstants.LOGIN_FAILURE, error } }
}

function registrate(username, password) {
	return async dispatch => {
		function onSuccess(success) {
			dispatch({ type: userConstants.REGISTRATION_SUCCESS, payload: success });
			history.push('/');
			return success;
		}
		function onError(error) {
			dispatch({ type: userConstants.REGISTRATION_FAILURE, error });
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
