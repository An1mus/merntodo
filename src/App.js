import React from 'react';
import { Router, Route } from 'react-router-dom';
import { history } from './helpers/history';

import './App.css';
import { ProtectedRoute } from './helpers/protectedRoute';
import { Access } from "./components/access";
import TodoList from "./components/todolist";


export default class App extends React.Component{
	constructor(props) {
		super(props);
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
