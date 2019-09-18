import React from 'react';
import TodoListItem from './todoitem/';
import './todolist.css'
import { userActions } from "../../actions/actions";
import { connect } from "react-redux";

class TodoList extends React.Component{
	id = 0;

	constructor(props) {
		super(props);

		this.state = {
			newTodo: '',
			todos: [],
		}
	}

	addTodo() {
		this.setState({
			todos: [
				...this.state.todos,
				{
					id: this.id++,
					label: this.state.newTodo,
					checked: false,
				}]
		});
	}

	toggleTodo(id) {
		this.setState({
			todos: this.state.todos.map((el) => {
				if(el.id !== id) return el;
				return {
					id: el.id,
					label: el.label,
					checked: !el.checked,
				}
			}),
		});
	}

	handleKeyPress(e) {
		if(e.key === 'Enter') {
			this.addTodo();
		}
	}

	removeTodo(id) {
		this.setState({
			todos: this.state.todos.filter(el => el.id !== id),
		});
	}

	logout() {
		this.props.logout();
	}

	render() {
		return (
			<div className={"todoListHolder"}>
				<button onClick={() => this.logout()}>Logout</button>
				<p>Items left: {this.state.todos.filter((el) => {return !el.checked}).length}</p>

				<div className="todoAddition">
					<input
						placeholder="Add item"
						type="text"
						value={this.state.newTodo}
						onKeyPress={(e) => {
							this.handleKeyPress(e);
						}}
						onChange={(e) => {
							this.setState({newTodo: e.target.value})
						}}
					/>
					<button onClick={() => this.addTodo()}>ADD</button>
				</div>

				<ul className={"todoList"}>
					{this.state.todos.map((todo) => {
						return (
							<li key={todo.id}>
								<TodoListItem
									todo={todo}
									onToggle={() => this.toggleTodo(todo.id)}
									onDelete={() => this.removeTodo(todo.id)}
								/>
							</li>
						);
					})}
				</ul>
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
	logout: userActions.logout,
};

const connectedAccessComponent = connect(mapState, actionCreators)(TodoList);
export { connectedAccessComponent as TodoList };

