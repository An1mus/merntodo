import { TODO_ACTIONS } from '../types';

/**
 * Dispatches an action which adds a new item,,
 * @param newItem - item to be added to the list
 */
function addTodo(newItem: any){
    return (dispatch: any) => {
        dispatch(TODO_ACTIONS.ADD, newItem);
    }
}

/**
 * Updates existing item description(data)
 * @param newItem
 */
function updateTodo(newItem: any){
    return (dispatch: any) => {
        dispatch(TODO_ACTIONS.UPDATE, newItem);
    }
}

/**
 * Remove item from the list
 * @param newItem
 */
function deleteTodo(newItem: any) {
    return (dispatch: any) => {
        dispatch(TODO_ACTIONS.REMOVE, newItem);
    }
}

const todoActions = {addTodo, updateTodo, deleteTodo};

export default todoActions;
