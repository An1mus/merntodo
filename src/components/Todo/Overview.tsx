import React from 'react';
import styled from 'styled-components';

const OverviewContainer = styled.section`
`;

const ChartsContainer = styled.div`
    display: flex;
`;

const Overview = () => {
    return (
        <OverviewContainer>
            <h2>Overview</h2>

            <ChartsContainer>
                <div>Charts 1</div>
                <div>Charts 2</div>
                <div>Charts 3</div>
            </ChartsContainer>
        </OverviewContainer>
    )
};

export default Overview;
