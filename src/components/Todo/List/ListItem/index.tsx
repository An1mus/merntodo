import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import { TodoItem } from '../../../../commons/types/todoItem';

interface Props {
    item: TodoItem,
    onDelete: (id: string) => void,
    updateTodo: (item: TodoItem) => void
}

const ListItemContainer = styled.div`
    display: flex;
    justify-content: space-between;
    width: 100%;
`;

const ListItem = ({onDelete, updateTodo, item}: Props) => {
    const [todoItem, setTodoItem] = useState(item);
    const {priority, name, category, isChecked, date, endDate} = todoItem;

    useEffect(() => {
        updateTodo(todoItem);
        }, [todoItem]);

    const checkItem = () => {
        setTodoItem({...todoItem, isChecked: !isChecked})
    };

    return (
        <ListItemContainer>
            <p>{priority}</p>
            <p>{name}</p>
            <p>{category.name}</p>
            {/*
            <p>isChecked: {isChecked ? 'Yes' : 'No'}</p>
            <p>Date: {new Date(date).toISOString()}</p>
            <p>End date: {endDate ? new Date(endDate).toISOString() : 'No end date'}</p>*/}
            {endDate ? <p>{endDate}</p> : <p>One Time</p>}
            <input type='checkbox' defaultChecked={isChecked} onChange={() => checkItem()} />
            <button onClick={() => onDelete(item.id)}>Delete</button>
        </ListItemContainer>
    )
};

export default ListItem;
