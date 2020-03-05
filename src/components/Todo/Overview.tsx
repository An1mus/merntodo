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
                <div>Done tasks: {todos.filter(item => item.isChecked).length}</div>
                <div>Tasks remaining: {todos.filter(item => !item.isChecked).length}</div>
                <div>Done by category chart?</div>
            </ChartsContainer>
        </OverviewContainer>
    )
};

export default Overview;
