import React from 'react';
import './App.css';
import Access from "./components/access";


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
			</div>
		);
	}
}
