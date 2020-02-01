import React, { useEffect, useState } from 'react';
import { TodoItem } from '../../../../commons/types/todoItem';

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

    const updateDescription = (text) => {
        console.log(text);
        setTodoItem({...todoItem, description: text});
    };

    return (
        <>
            <p>ID: {id}</p>
            <p>Name: {name}</p>
            <textarea
                placeholder={'Item description'}
                onChange={(e) => updateDescription(e.target.value)}
                value={description}
            />
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
