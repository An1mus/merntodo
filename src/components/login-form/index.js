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
				<button onClick={(e) => {

					if(username && password) { // TODO: add vaidation
						registrate(username, password)
					}
				}}>Register</button>
				<button onClick={(e) => {

					if(username && password) { // TODO: add vaidation
						login(username, password);
					}
				}}>login</button>
			</div>
		</form>
	);
};

LoginForm.propTypes = {
	registrate: PropTypes.func.isRequired,
	login: PropTypes.func.isRequired
};

export default LoginForm;
