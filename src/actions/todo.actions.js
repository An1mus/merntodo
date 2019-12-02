import { todoConstants } from '../constants/todo.constants';
import todoService from '../services/todo.service';
import { history } from '../helpers/history';

export const todoActions = {
	addTodo,
	loadTodos,
	removeTodo,
};

function addTodo(owner, label, checked) {
	return dispatch => {
		dispatch(request({owner, label, checked }));

		todoService.addTodo(owner, label, checked)
			.then(
				todo => {
					dispatch(success(todo));
					history.push('/');
				},
				error => {
					dispatch(failure(error));
				}
			);
	};

	function request(todo) { return { type: todoConstants.ADD, payload: todo } }
	function success(todo) { return { type: todoConstants.ADD_SUCCESS, payload: todo } }
	function failure(error) { return { type: todoConstants.ADD_FAILURE, payload: error } }
}


function loadTodos(owner) {
	return async dispatch => {
		function onSuccess(todos) {
			dispatch({ type: todoConstants.LOAD_SUCCESS, payload: todos });
			return todos;
		}
		function onError(error) {
			dispatch({ type: todoConstants.LOAD_FAILURE, payload: error });
			return error;
		}
		try {
			const success = await todoService.loadTodos(owner);
			return onSuccess(success);
		} catch (error) {
			return onError(error);
		}
	}
}

function removeTodo(owner, todoId) {
	return async dispatch => {
		function onSuccess(success) {
			dispatch({ type: todoConstants.REMOVE_SUCCESS, payload: success });
			return success;
		}
		function onError(error) {
			dispatch({ type: todoConstants.REMOVE_FAILURE, error });
			return error;
		}
		try {
			const success = await todoService.removeTodo(owner, todoId);
			return onSuccess(success);
		} catch (error) {
			return onError(error);
		}
	}
}
