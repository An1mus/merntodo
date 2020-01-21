import React from 'react';
import ListItem from '../ListItem';
import { TodoItem } from '../../../commons/types/todoItem';

interface Props {
    todos: TodoItem[],
    onDelete: (name: TodoItem) => void,
}

const List = ({onDelete, todos = []}: Props,) => {
    return (
        <>
            {
                todos.length !== 0
                    ? todos.map((item: any, index: number) => (
                            <ListItem
                                key={index}
                                item={item}
                                onDelete={onDelete}
                            />
                        ))
                    : <p>Nothing to do yet...</p>
            }
        </>
    )
};

export default List;
