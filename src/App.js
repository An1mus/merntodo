import React from 'react';
import { Router, Route } from 'react-router-dom';
import { history } from './helpers/history';

import './App.css';
import { ProtectedRoute } from './helpers/protectedRoute';
import { Access } from "./components/access";
import { TodoList } from "./components/todolist";


const App = () => {
	return (
		<div className="App">
			<Router history={history}>
				<ProtectedRoute exact path="/" component={TodoList} />
				<Route path="/login" component={Access} />
			</Router>
		</div>
	);
}

export default App;
