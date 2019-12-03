import React, {useState} from 'react';
import PropTypes from 'prop-types';

import './index.css';

const LoginForm = ({registrate, login}) => {
	const [userData, updateUserData] = useState({username: '', password: ''});
	const {username, password} = userData;

	const handleFormInput = (e) => {
		updateUserData(Object.assign(
			{},
			userData,
			{[e.target.name]: e.target.value})
		)
	};

	const handleRegistration = (e) => {
		e.preventDefault();

		// TODO validation
		registrate(username, password)
	};

	const handleLogin = (e) => {
		e.preventDefault();

		// TODO validation
		login(username, password)
	};

	return (
		<form>
			<input
				type='text'
				value={username}
				name='username'
				onChange={(e) => handleFormInput(e)}
				placeholder='login'
				autoComplete='username'
			/>

			<input
				type='password'
				value={password}
				name='password'
				onChange={(e) => handleFormInput(e)}
				placeholder='password'
				autoComplete='current-password'
			/>

			<div className="buttons-Container">
				<button
					type='submit'
					onClick={(e) => handleRegistration(e)}
				>
					Register
				</button>
				<button
					type='submit'
					onClick={(e) => handleLogin(e)}
				>
					Login
				</button>
			</div>
		</form>
	);
};

LoginForm.propTypes = {
	registrate: PropTypes.func.isRequired,
	login: PropTypes.func.isRequired
};

export default LoginForm;
