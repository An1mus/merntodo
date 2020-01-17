import {createStore, applyMiddleware, compose} from 'redux';
import thunk from 'redux-thunk';
import rootReducer from './reducers';

// @ts-ignore -- for Redux app
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

// storage check
const initialStore = {todos: JSON.parse(localStorage.getItem('todos') || '[]')};

const store = createStore(
    rootReducer,
    initialStore,
    composeEnhancers(applyMiddleware(thunk))
);

store.subscribe(()=>{
    localStorage.setItem('todos', JSON.stringify(store.getState().todos))
});

export default store;
