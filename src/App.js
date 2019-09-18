import React from 'react';
import { Router, Route } from 'react-router-dom';
import { history } from './helpers/history';

import './App.css';
import Access from "./components/access";
import TodoList from "./components/todolist";
import { ProtectedRoute } from './helpers/protectedRoute';


export default class App extends React.Component{
	constructor() {
		super();
		this.state = {
			isLogged: false,
		};
	}

	render() {
		return (
			<div className="App">

				<Router history={history}>
					<ProtectedRoute exact path="/" component={TodoList} />
					<Route path="/login" component={Access} />
				</Router>
			</div>
		);
	}
}
