import React from 'react';
import styled from 'styled-components';
import { getDataSting } from '../../commons/utilities';

const ListHeaderContainer = styled.div`
    margin-bottom: 1.2rem;
`;

const ListHeader = () => {
    const today = new Date();
    return (
        <ListHeaderContainer>
           <p>{getDataSting(today.getTime())}</p>
        </ListHeaderContainer>
    )
};

export default ListHeader;
