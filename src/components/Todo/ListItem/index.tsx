import React from 'react';

const ListItem = ({name, description}: any) => {
    return (
        <>
            <p>{name}</p>
            <p>{description}</p>
        </>
    )
};

export default ListItem;
