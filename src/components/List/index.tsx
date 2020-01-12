import React from 'react';
import ListItem from './ListItem';

const LIST_ITEMS = [
    {
        name: 'Hello there bitch',
        description: 'So you should create a todo list with new stuff now you fucking motherfucker, and it better be awesome',
        creationDate: new Date(),
        dueDateExists: true,
        dueDate: new Date('01-01-2022'),
        type: 'Gym/Programming/User-created types'
    }
];

const List = () => {
    return (
        <>
            {
                LIST_ITEMS.length !== 0
                ? LIST_ITEMS.map(item => <ListItem {...item} />)
                : <p>Nothing to do yet...</p>
            }
        </>
    );
};

export default List;
