import React from 'react';
import './todoitem.css';

export default class TodoListItem extends React.Component{
	constructor(props) {
		super();
		this.state = {
			index: props.index + 1,
			props: props.todo,
		}
	}

	render() {
		return (
			<div className={"todoItem"}>
				<p className={"todoItemId"}>{this.state.index}</p>
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
