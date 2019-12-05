import React from 'react';
import { connect } from 'react-redux';

import './access.css';

import { userActions } from '../../actions/actions';

import LoginForm from '../../components/login-form';

const Access = (props) => {
	return (
		<div>
			<header>
				<h1>ToDo</h1>
			</header>

			<LoginForm registrate={props.registrate} login={props.login}/>
		</div>
	);
};

function mapStateToProps(state) {
	const { loggingIn } = state.userLogin;
	return { loggingIn };
}

const mapDispatchToProps = {
	login: userActions.login,
	registrate: userActions.registrate
};

const connectedAccessComponent = connect(mapStateToProps, mapDispatchToProps)(Access);
export { connectedAccessComponent as Access };
