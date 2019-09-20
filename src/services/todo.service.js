import axios from 'axios';
import {
	todoAdditionUrl,
	todoRemovalUrl
} from "./config";

const todoService = {
	addTodo,
	loadTodos,
	removeTodo
};

function addTodo(owner, label, checked) {
	const date = new Date();

	return fetch(todoAdditionUrl, {
		method: 'POST',
		headers: {
			'Accept': 'application/json',
			'Content-Type': 'application/json',
		},
		body: JSON.stringify({
			date,
			owner,
			label,
			checked,
		})
	});
}

async function loadTodos(owner) {
	const response = await axios.get(todoAdditionUrl + '/' + owner);
	return response.data.data; // TODO: change server response here

}

async function removeTodo(owner, todoId) {
	return await axios.post(todoRemovalUrl, {
		owner,
		todoId
	})
}


export default todoService;
