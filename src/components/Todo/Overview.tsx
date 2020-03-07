import React from 'react';
import styled from 'styled-components';
import { TodoItem } from '../../commons/types/todoItem';

const OverviewContainer = styled.section`
`;

const ChartsContainer = styled.div`
    display: flex;
    justify-content: space-between;
    
    div {
        width: 30%;
    }
`;

interface OverviewProps {
    todos: TodoItem[]
}

const Overview: React.FC<OverviewProps> = ({todos}) => {
    return (
        <OverviewContainer>
            <h2>Overview</h2>

            <ChartsContainer>
                <div>Done: <b>{todos.filter(item => item.isChecked).length}</b></div>
                <div>Remaining: <b>{todos.filter(item => !item.isChecked).length}</b></div>
                <div>Total: <b>{todos.length}</b></div>
            </ChartsContainer>
        </OverviewContainer>
    )
};

export default Overview;
