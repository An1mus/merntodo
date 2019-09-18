import { userConstants } from '../constants/user.constants';
import { userService } from '../services/user.service';
import { history } from '../helpers/history';

export const userActions = {
	login,
	logout,
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

function logout() {
	userService.logout();
	return { type: userConstants.LOGOUT };
}
