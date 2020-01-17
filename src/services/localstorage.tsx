/**
 * Just Save/Get todos from Local Storage
 */

const todosService = {
    saveTodos,
    getTodos
};

function saveTodos(todos: any) {
    localStorage.setItem('todos', JSON.stringify(todos));
}

function getTodos() {
    return localStorage.getItem('todos');
}

export default todosService;
