import React from 'react';
import { connect } from 'react-redux';
import styled from 'styled-components';
import AddItemForm from './AddItemForm';
import todoActions from '../../redux/actions/todos';
import ListHeader from './ListHeader';
import List from './List';
import { TodoItem } from '../../commons/types/todoItem';

const ListContainer = styled.div`
    margin: 0 auto;
    min-width: 24rem;
    padding: 2rem 0 0 0;
    width: 100%;
`;

const ListItemsContainer = styled.div`
    background: var(--main-background-highlight-color);
    border-radius: 1rem;
    padding: 2rem;
`;


interface Props {
    deleteTodo: (id: string) => void,
    updateTodo: (newItem: TodoItem) => void,
    todos: TodoItem[]
}

const TodoList = ({deleteTodo, updateTodo, todos}: Props) => {
    return (
        <>
            <ListContainer>
                <h2>
                    Your To-Dos
                </h2>

                <ListItemsContainer>
                    <ListHeader />
                    <List todos={todos} onDelete={deleteTodo} updateTodo={updateTodo}/>
                </ListItemsContainer>
            </ListContainer>
        </>
    );
};

export default TodoList;
