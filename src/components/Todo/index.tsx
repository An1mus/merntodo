import React from 'react';
import styled from 'styled-components';
import ListHeader from './ListHeader';
import List from './List';
import { TodoItem } from '../../commons/types/todoItem';
import Overview from './Overview/';

const ListContainer = styled.section`
    min-width: 24rem;
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
            <Overview todos={todos}/>
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
