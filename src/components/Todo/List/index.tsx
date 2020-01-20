import React from 'react';
import ListItem from '../ListItem';
import { TodoItem } from '../../../commons/types/todoItem';

interface Props {
    todos: TodoItem[],
    onDelete: (name: string) => void,
}

const List = ({onDelete, todos = []}: Props,) => {
    const DESCRIPTION_TO_CHANGE = 'Some description'; //TODO: add description
    return (
        <>
            {
                todos.length !== 0
                    ? todos.map((item: any, index: number) => (
                            <ListItem
                                key={index}
                                name={item}
                                description={DESCRIPTION_TO_CHANGE}
                                onDelete={onDelete}
                            />
                        ))
                    : <p>Nothing to do yet...</p>
            }
        </>
    )
};

export default List;
