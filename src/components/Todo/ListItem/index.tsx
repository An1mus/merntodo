import React, { useEffect, useState } from 'react';
import { TodoItem } from '../../../commons/types/todoItem';

interface Props {
    item: TodoItem,
    onDelete: (id: string) => void,
    updateTodo: (item: TodoItem) => void
}

const ListItem = ({onDelete, updateTodo, item}: Props) => {
    const [todoItem, setTodoItem] = useState(item);
    const {id, name, description, category, isChecked, date, endDate} = todoItem;

    useEffect(() => {
        updateTodo(todoItem);
        }, [todoItem]);

    const checkItem = () => {
        setTodoItem({...todoItem, isChecked: !isChecked})
    };

    return (
        <>
            <p>{id}</p>
            <p>{name}</p>
            <p>Description: {description}</p>
            <p>Category: {category.name}</p>
            <p>isChecked: {isChecked ? 'Yes' : 'No'}</p>
            <p>Date: {new Date(date).toISOString()}</p>
            <p>End date: {endDate ? new Date(endDate).toISOString() : 'No end date'}</p>
            <input type='checkbox' defaultChecked={isChecked} onChange={() => checkItem()} />
            <button onClick={() => onDelete(item.id)}>Delete</button>
        </>
    )
};

export default ListItem;
