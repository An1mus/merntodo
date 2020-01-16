import React from 'react';
import ListItem from '../ListItem';

const List = ({onDelete, todos = []}: any,) => {
    return (
        <>
            {
                todos.length !== 0
                    ? todos.map((item: any, index: number) => <ListItem key={index} name={item} onDelete={onDelete}/>)
                    : <p>Nothing to do yet...</p>
            }
        </>
    )
};

export default List;
