import React from 'react';
import './access.css';

export default class Access extends React.Component {

	constructor() {
		super();
		this.state = {
			userLogin: '',
			userPassword: ''
		};
	}

	render() {
		return (
			<div>
				<header>
					<h1>ToDo</h1>
				</header>

				<form>
					<input type="text" placeholder={"login"}/>
					<input type="text" placeholder={"password"}/>

					<div className="buttons-Container">
						<button>Register</button>
						<button>login</button>
					</div>
				</form>
			</div>
		);
	}

}
