import React from 'react';
import ListItem from './ListItem';
import { TodoItem } from '../../../commons/types/todoItem';
import styled from 'styled-components';

const ListItemsContainer = styled.div`
    background: var(--main-background-highlight-color);
    border-radius: 1rem;
    padding: 2rem;
`;

interface Props {
    todos: TodoItem[],
    onDelete: (id: string) => void,
    updateTodo: (item: TodoItem) => void,
}

const List = ({onDelete, updateTodo, todos = []}: Props,) => {
    return (
        <ListItemsContainer>
            {
                todos.length !== 0
                    ? todos.map((item: any) => (
                            <ListItem
                                key={item.id}
                                item={item}
                                onDelete={onDelete}
                                updateTodo={updateTodo}
                            />
                        ))
                    : <p>Nothing to do yet...</p>
            }
        </ListItemsContainer>
    )
};

export default List;
