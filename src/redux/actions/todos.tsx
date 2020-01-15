import { TODO_ACTIONS } from '../types';

/**
 * Dispatches an action which adds a new item,,
 * @param newItem - item to be added to the list
 */
function addTodo(newItem: any){
    return (dispatch: any) => {
        dispatch({type: TODO_ACTIONS.ADD, payload: newItem});
    }
}

/**
 * Updates existing item description(data)
 * @param newItem
 */
function updateTodo(newItem: any){
    return (dispatch: any) => {
        dispatch({type: TODO_ACTIONS.UPDATE, payload: newItem});
    }
}

/**
 * Remove item from the list
 * @param newItem
 */
function deleteTodo(newItem: any) {
    return (dispatch: any) => {
        dispatch({type: TODO_ACTIONS.REMOVE, payload: newItem});
    }
}

const todoActions = {addTodo, updateTodo, deleteTodo};

export default todoActions;
