import React from 'react';
import { TodoItem } from '../../../commons/types/todoItem';

interface Props {
    item: TodoItem,
    onDelete: (item: TodoItem) => void,
}

const ListItem = ({onDelete, item}: Props) => {
    const {name, description} = item;

    return (
        <>
            <p>{name}</p>
            <p>{description}</p>
            <button onClick={() => onDelete(item)}>Delete</button>
        </>
    )
};

export default ListItem;
