import React from 'react';
import './App.css';
import Access from "./components/access";
import TodoList from "./components/todolist";


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
				{!this.state.isLogged && <Access/>}
				{this.state.isLogged && <TodoList/>}
			</div>
		);
	}
}
