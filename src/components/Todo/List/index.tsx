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
        </>
    )
};

export default List;
