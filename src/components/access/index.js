import React from 'react';
import './access.css';
import { connect } from 'react-redux';

import { userActions } from '../../actions/actions';

class Access extends React.Component {

	constructor(props) {
		super(props);

		this.state = {
			userLogin: '',
			userPassword: '',
			submitted: false,
		};
	}

	login(e) {
		e.preventDefault();

		this.setState({ submitted: true });

		const { userLogin, userPassword } = this.state;
		if (userLogin && userPassword) {
			this.props.login(userLogin, userPassword);
		}
	}

	registrate(e) {
		e.preventDefault();

		this.setState({ submitted: true });

		const { userLogin, userPassword } = this.state;
		if (userLogin && userPassword) {
			this.props.registrate(userLogin, userPassword);
		}
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

				<form>
					{this.state.submitted && !this.state.userLogin && <p>Login required</p>}
					<input
						type="text"
						value={this.state.userLogin}
						onChange={e => this.setState({userLogin: e.target.value})}
						placeholder={"login"}
					/>

					{this.state.submitted && !this.state.userPassword && <p>Password required</p>}
					<input
						type="password"
						value={this.state.userPassword}
						onChange={e => this.setState({userPassword: e.target.value})}
						placeholder={"password"}
					/>

					<div className="buttons-Container">
						<button onClick={(e) => {this.registrate(e)}}>Register</button>
						<button onClick={(e) => this.login(e)}>login</button>
					</div>
				</form>
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
