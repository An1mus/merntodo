import STATUSES from './statuses';

function getPositiveAuthenticationResponse(user, token) {
	return {
		ok: true,
		code: STATUSES.OK.code,
		message: STATUSES.OK.text,
		user,
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

function getNegativeAdditionResponse(error) {
	return {
		ok: false,
		code: STATUSES.NOT_FOUND.code,
		message: STATUSES.NOT_FOUND.text,
		data: error || 'Addition of the item wasn\'t successful',
	};
}

function getPositiveAdditionResponse(result) {
	return {
		ok: true,
		code: STATUSES.OK.code,
		message: STATUSES.OK.text,
		data: result,
	};
}

function getPositiveGenericResponse(result) {
	return {
		ok: true,
		code: STATUSES.OK.code,
		message: STATUSES.OK.text,
		data: result,
	};
}

function getNegativeGenericResponse(error) {
	return {
		ok: false,
		code: STATUSES.NOT_FOUND.code,
		message: STATUSES.NOT_FOUND.text,
		data: error || 'Addition of the item wasn\'t successful',
	};
}

export default {
	getPositiveAuthenticationResponse,
	getNegativeAuthenticationResponse,
	getPositiveAdditionResponse,
	getNegativeAdditionResponse,
	getPositiveGenericResponse,
	getNegativeGenericResponse,
};
