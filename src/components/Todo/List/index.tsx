import React from 'react';
import ListItem from './ListItem';
import { TodoItem } from '../../../commons/types/todoItem';

interface Props {
    todos: TodoItem[],
    onDelete: (id: string) => void,
    updateTodo: (item: TodoItem) => void,
}

const List = ({onDelete, updateTodo, todos = []}: Props,) => {
    return (
        <>
            {
                todos.length !== 0
                    ? todos.map((item: any, index: number) => (
                            <ListItem
                                key={index}
                                item={item.id}
                                onDelete={onDelete}
                                updateTodo={updateTodo}
                            />
                        ))
                    : <p>Nothing to do yet...</p>
            }
        </>
    )
};

export default List;
