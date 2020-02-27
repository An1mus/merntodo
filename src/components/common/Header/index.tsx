import React from 'react';
import styled from 'styled-components';

const HeaderContainer = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
`;

const HamburgerButton = styled.button`
    background: none;
    border: 0;
    cursor: pointer;
    padding: 0;
    outline: none;
    
    div {
        background: var(--main-text-color);
        border-radius: 0.2rem;
        cursor: pointer;
        height: 0.33rem;
        margin: 0 0 0.3rem 0;
        width: 2rem;
    }
    
    @media (min-width: 980px) {
        display: none;
    }
`;

interface HeaderProps {
    onMenuClick: () => void,
}

const Header: React.FC<HeaderProps> = ({onMenuClick}) => {
    return (
        <HeaderContainer>
            <h1>Todo LIST</h1>
            <HamburgerButton onClick={onMenuClick}>
                <div/>
                <div/>
                <div/>
            </HamburgerButton>
        </HeaderContainer>
    );
};

export default Header;
