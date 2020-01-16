import React from 'react';

const ListItem = ({name, onDelete}: any) => {
    return (
        <>
            <p>{name}</p>
            <button onClick={() => onDelete(name)}>Delete</button>
        </>
    )
};

export default ListItem;
