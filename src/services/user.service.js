import sha256 from 'sha256';

export const userService = {
	login, logout
};

const serverUrl = 'http://localhost:8080/';
const authEndpoint = serverUrl + 'auth';

function login(username, password) {
	const requestOptions = {
		method: 'POST',
		headers: {'Content-Type': 'object'},
		body: JSON.stringify({username, password}),
	};

	return fetch(authEndpoint+'?username=' + username + '&password=' + sha256(password))
		.then(parseResponse)
		.then(data => {
			const user = data && data.user ? data.user : {};

			if(data.ok && data.code === 200) {
				localStorage.setItem('user', JSON.stringify(user));
				return user;
			} else {
				alert('Raw response: Something went wrong');
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
