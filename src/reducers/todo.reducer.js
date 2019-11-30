import { todoConstants } from "../constants/todo.constants";

const initialState = {s: 'initial'};

export function todoUpdate(state = initialState, action) {
	switch (action.type) {
		case todoConstants.LOAD_FAILURE:
			return {};
		case todoConstants.ADD_FAILURE:
			return {};
		case todoConstants.REMOVE_FAILURE:
			return {};
		case todoConstants.ADD_SUCCESS:
			return {
				...state,
				todos: [...state.todos, action.payload],
			};
		case todoConstants.LOAD_SUCCESS:
			return {
				...state,
				todos: action.payload
			};
		case todoConstants.REMOVE_SUCCESS:
			return {
				...state,
				todos: [...state.todos]
			};
		default:
			return state
	}
}
