import React from 'react';
import './todoitem.css';

export default class TodoListItem extends React.Component{
	constructor(props) {
		super();
		this.state = {
			props: props.todo,
		}
	}

	render() {
		return (
			<div className={"todoItem"}>
				<p className={"todoItemId"}>{this.state.props.id}</p>
				<input
					type="checkbox"
					checked={this.state.props.isFinished}
					onChange={() => {this.props.onToggle()}}
				/>
				<p className={"todoItemText"}>{this.state.props.label}</p>
				<button onClick={() => {this.props.onDelete()}}>Delete</button>
			</div>
		);
	}
}
