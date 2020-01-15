import React from 'react';
import styled from 'styled-components';
import AddItemForm from './AddItemForm';
import List from './List';

const ListContainer = styled.div`
    margin: 0 auto;
    min-width: 24rem;
    padding: 3rem 0;
    width: 80%;
`;

const Todo = () => {
    return (
        <ListContainer>
            <AddItemForm />
            <List />
        </ListContainer>
    );
};

export default Todo;
