import React from 'react';
import styled from 'styled-components';
import { TodoItem } from '../../../commons/types/todoItem';
import OverviewItem from './OverviewItem';

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
                <OverviewItem
                    header={'The ration of done to Created / day'}
                    items={todos.filter(item => item.isChecked).length}
                />
                <OverviewItem
                    header={'The ratio of items done in time / day'}
                    items={todos.filter(item => !item.isChecked).length}
                />
                <OverviewItem
                    header={'The ratio of Critical to Low done / day'}
                    items={todos.length}
                />
            </ChartsContainer>
        </OverviewContainer>
    )
};

export default Overview;
