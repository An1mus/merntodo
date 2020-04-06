import React from 'react';
import styled from 'styled-components';
import AddItemForm from '../../Todo/AddItemForm';
import { TodoItem } from '../../../commons/types/todoItem';

const HeaderContainer = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
`;

interface Props {
    addTodo: (item: TodoItem) => void,
}

const Header: React.FC<Props> = ({addTodo}) => {
    return (
        <HeaderContainer>
            <AddItemForm addTodo={addTodo}/>
        </HeaderContainer>
    );
};

export default Header;
