export default class userService {

	login(username, password) {
		const requestOptions = {
			method: 'POST',
			headers: {'Content-Type': 'application/json'},
			body: JSON.stringify({username, password})
		};

		return fetch(`/auth`, requestOptions)
			.then(this.checkReponse)
			.then(user => {
				localStorage.setItem('user', JSON.stringify(user));

				return user;
			});
	}

	logout() {
		localStorage.removeItem('user');
	}

	checkReponse(response) {
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
};
