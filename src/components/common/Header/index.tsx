import React from 'react';
import styled from 'styled-components';

const HeaderContainer = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
`;

const Header: React.FC = () => {
    return (
        <HeaderContainer>
            <h1>Todo LIST</h1>
        </HeaderContainer>
    );
};

export default Header;
