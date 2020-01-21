import React from 'react';
import { TodoItem } from '../../../commons/types/todoItem';

interface Props {
    item: TodoItem,
    onDelete: (item: TodoItem) => void,
}

const ListItem = ({onDelete, item}: Props) => {
    const {name, description, category, isChecked, date, endDate} = item;

    return (
        <>
            <p>{name}</p>
            <p>Description: {description}</p>
            <p>Category: {category.name}</p>
            <p>isChecked: {isChecked ? 'Yes' : 'No'}</p>
            <p>Date: {new Date(date).toISOString()}</p>
            <p>End date: {endDate ? new Date(endDate).toISOString() : 'No end date'}</p>
            <button onClick={() => onDelete(item)}>Delete</button>
        </>
    )
};

export default ListItem;
