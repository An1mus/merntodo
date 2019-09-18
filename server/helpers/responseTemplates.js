import STATUSES from './statuses';

/**
 * Gets user data to provide an object with successful auth credentials
 * @param email
 * @param username
 * @param token
 * @return {Object} - the positive response object, after successful authentication
 */
function getPositiveAuthenticationResponse(email, username, token) {
	return {
		ok: true,
		code: STATUSES.OK.code,
		message: STATUSES.OK.text,
		data: {
			user: {
				email,
				username,
			},
		},
		token,
	};
}

function getNegativeAuthenticationResponse(error) {
	return {
		ok: false,
		code: STATUSES.NOT_FOUND.code,
		message: STATUSES.NOT_FOUND.text,
		data: error || 'User not found, check the credentials',
	};
}

export default {
	getPositiveAuthenticationResponse,
	getNegativeAuthenticationResponse,
};
