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

async function addTodo(owner, label, checked) {
	const date = new Date();

	const response = await axios.post(todoAdditionUrl, {
		date,
		owner,
		label,
		checked,
	});

	return response.data.data;
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
