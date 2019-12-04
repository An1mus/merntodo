import React from 'react';
import { connect } from 'react-redux';

import './access.css';

import { userActions } from '../../actions/actions';

import LoginForm from '../../components/login-form';

class Access extends React.Component {

	constructor(props) {
		super(props);
	}

	logout() {
		this.props.logout();
	}

	render() {
		return (
			<div>
				<header>
					<h1>ToDo</h1>
				</header>

				<LoginForm registrate={this.props.registrate} login={this.props.login}/>
			</div>
		);
	}

}

function mapState(state) {
	const { loggingIn } = state.userLogin;
	return { loggingIn };
}

const actionCreators = {
	login: userActions.login,
	registrate: userActions.registrate,
	logout: userActions.logout,
};

const connectedAccessComponent = connect(mapState, actionCreators)(Access);
export { connectedAccessComponent as Access };
