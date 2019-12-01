import React from 'react';
import TodoListItem from './todoitem/';
import './todolist.css'
import { userActions } from "../../actions/actions";
import { todoActions } from "../../actions/todo.actions";
import { connect } from "react-redux";

class TodoList extends React.Component{
	id = 0;

	constructor(props) {
		super(props);

		this.state = {
			newTodo: ''
		}
	}

	async componentDidMount() {
		const user = localStorage.getItem('user');
		this.props.loadTodos(user.id);
	}

	async addTodo() {
		const user = localStorage.getItem('user');

		const newTodo = {
			id: this.id++,
			label: this.state.newTodo,
			checked: false,
		};

		this.props.addTodo(user.id, newTodo.label, newTodo.checked);

		this.setState({newTodo: ''});
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

	// TODO: review remove todo to be put on props
	removeTodo(owner, todoId) {
		this.props.removeTodo(owner, todoId)
	}

	logout() {
		this.props.logout();
	}

	render() {
		return (
			<div className={"todoListHolder"}>
				<button className={"logoutButton"} onClick={() => this.logout()}>Logout</button>
				<p>Items left: {this.props.todos && this.props.todos.filter((el) => {return !el.checked}).length}</p>

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
					{this.props.todos && this.props.todos.map((todo, index) => {
						return (
							<li key={todo._id}>
								<TodoListItem
									index={index}
									todo={todo}
									onToggle={() => this.toggleTodo(todo.id)} // TODO: change for updating
									onDelete={() => this.removeTodo(todo.owner, todo._id)}
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
	const { todos, newTodo } = state.todoUpdate;
	return todos ? { todos, newTodo } : null;
}

const actionCreators = {
	loadTodos: todoActions.loadTodos,
	addTodo: todoActions.addTodo,
	removeTodo: todoActions.removeTodo,
	logout: userActions.logout,
};

const connectedAccessComponent = connect(mapState, actionCreators)(TodoList);
export { connectedAccessComponent as TodoList };

