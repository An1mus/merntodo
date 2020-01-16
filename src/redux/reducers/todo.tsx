import { TODO_ACTIONS } from '../types/';

const initialState: any[] = [];

// TODO: apply types
function todos(state = initialState, action: any) {
    switch (action.type) {
        case TODO_ACTIONS.ADD:
            console.log([...state, action.payload]);
            return [...state, action.payload];
        case TODO_ACTIONS.REMOVE:
            return [...state.filter(todo => todo !== action.payload)];
        case TODO_ACTIONS.UPDATE:
            return [...state.map(todo => {
                if (todo.id === action.payload.id) return action.payload;
                return todo;
            })];
        default:
            return state;
    }
}

export default todos;
