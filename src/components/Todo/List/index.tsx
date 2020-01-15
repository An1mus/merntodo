import React from 'react';
import ListItem from '../ListItem';

const LIST_ITEMS: any[] = [
    {
        name: 'Hello there bitch',
        description: 'So you should create a todo list with new stuff now you fucking motherfucker, and it better be awesome',
        creationDate: new Date(),
        dueDateExists: true,
        dueDate: new Date('01-01-2022'),
        type: 'Gym/Programming/User-created types'
    }

];

const List = ({todos = []}: any) => {
    return (
        <>
            {
                todos.length !== 0
                    ? todos.map((item: any, index: number) => <ListItem key={index} name={item} />)
                    : <p>Nothing to do yet...</p>
            }
        </>
    )
};

export default List;
