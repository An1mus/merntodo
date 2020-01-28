import { TODO_ACTIONS } from '../types/';

const initialState: any[] = [];

function todos(state = initialState, action: any) {
    switch (action.type) {
        case TODO_ACTIONS.ADD:
            return [...state, action.payload];
        case TODO_ACTIONS.REMOVE:
            return [...state.filter(todo => todo.name !== action.payload)];
        case TODO_ACTIONS.UPDATE:
            return [...state.map(todo => {
                if (todo.name === action.payload.name) return action.payload;
                return todo;
            })];
        default:
            return state;
    }
}

export default todos;
