import React from 'react';

interface Props {
    name: string,
    description: string,
    onDelete: (name: string) => void,
}

const ListItem = ({name, description, onDelete}: Props) => {
    return (
        <>
            <p>{name}</p>
            <p>{description}</p>
            <button onClick={() => onDelete(name)}>Delete</button>
        </>
    )
};

export default ListItem;
