import sha256 from 'sha256';

import {authEndpoint, registerEndpoint} from "./config";

export const userService = {
	login,
	logout,
	register
};

function login(username, password) {
	return fetch( authEndpoint,
		{
			method: 'POST',
			headers: {
				'Accept': 'application/json',
				'Content-Type': 'application/json',
			},
			body: JSON.stringify({
				username,
				password: sha256(password)
			})
		})
		.then(parseResponse)
		.then(data => {
			const user = data && data.user ? data.user : {};

			if(data.ok && data.code === 200) {
				localStorage.setItem('user', JSON.stringify(user));
				return user;
			} else {
				alert('Incorrect credentials');
			}
		});
}

// TODO: implement registration
function register(username, password) {
	return fetch( registerEndpoint,
		{
			method: 'POST',
			headers: {
				'Accept': 'application/json',
				'Content-Type': 'application/json',
			},
			body: JSON.stringify({
				username,
				password: sha256(password)
			})
		})
		.then(parseResponse)
		.then(data => {
			const user = data && data.user ? data.user : {};

			if(data.ok && data.code === 200) {
				localStorage.setItem('user', JSON.stringify(user));
				return user;
			} else {
				alert('Incorrect credentials');
			}
		});
}

function logout() {
	localStorage.removeItem('user');
	window.location.reload();
}

function parseResponse(response) {
	return response.text()
		.then(text => {
			return text && JSON.parse(text);
		});
}
