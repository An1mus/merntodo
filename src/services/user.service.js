import sha256 from 'sha256';
import axios from 'axios';

import {authEndpoint, registerEndpoint} from "./config";

export const userService = {
	login,
	logout,
	registrate
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

async function registrate(username, password) {
	const callResult = await axios.post(registerEndpoint, {
		username,
		password: sha256(password)
	});

	const data = callResult.data;

	const user = data && data.user ? data.user : {};

	if(data.ok && data.code === 200) {
		localStorage.setItem('user', JSON.stringify(user));
		return user;
	} else {
		alert('Something went wrong, call your friend, who understands computers');
		throw new Error('Something went wrong, call your friend, who understands computers');
	}
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
