import React from 'react';
import styled from 'styled-components';
import OverviewChart from './OverviewChart';

const OverviewItemContainer = styled.div`
    display: flex;
    flex-direction: column;
`;

interface OverviewItemProps {
    items: number,
    header: string,
}

const OverviewItem: React.FC<OverviewItemProps> = ({items, header}) => {
    return <OverviewItemContainer>
        <p>{header}</p>
        <OverviewChart chartData={items}/>
    </OverviewItemContainer>
};

export default OverviewItem;
