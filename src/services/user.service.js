export const userService = {
	login, logout
};

const serverUrl = 'http://localhost:8080';
const authEndpoint = serverUrl + '/auth';

function login(username, password) {
	const requestOptions = {
		method: 'POST',
		headers: {'Content-Type': 'application/json'},
		body: JSON.stringify({username, password})
	};

	return fetch(authEndpoint, requestOptions)
		.then(checkReponse)
		.then(user => {
			localStorage.setItem('user', JSON.stringify(user));

			return user;
		});
}

function logout() {
	localStorage.removeItem('user');
}

function checkReponse(response) {
	return response.text()
		.then(text => {
			const data = text && JSON.parse(text);
			if (!response.ok) {
				if (response.status === 401) {
					this.logout();
					window.location.reload();
				}

				const error = (data && data.message) || response.statusText;
				return Promise.reject(error);
			}

			return data;
		});
}
