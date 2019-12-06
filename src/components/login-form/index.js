import React, {useState} from 'react';
import PropTypes from 'prop-types';

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
				required={true}
			/>

			<input
				type='password'
				value={password}
				name='password'
				onChange={(e) => handleFormInput(e)}
				placeholder='password'
				autoComplete='current-password'
				required={true}
			/>

			<div className="buttons-Container">
				<button
					type='button'
					onClick={(e) => handleRegistration(e)}
				>
					Register
				</button>
				<button
					type='button'
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
