import React from 'react';
import NAV_LINKS from './nav.config';
import styled from 'styled-components';
import NavItem from './NavItem';
import logo from '../../../assets/logo.svg';

const LogoContainer = styled.div`
    box-sizing: border-box;
    margin: 2rem auto 6rem auto;
    pointer-events: none;
    display: none;
    width: 10rem;    
    
    img {
        position: relative;
        width: 100%;
    }
    
    @media (min-width:980px) {
        display: flex;
    }
`;

const NavLinkItems = styled.div`
    display: flex;
    justify-content: space-between;
    width: 50%;
    min-width: 23rem;
    
    @media (min-width:980px) {
        display: flex;
        flex-direction: column;
        min-width: initial;
        width: 100%;
    }
`;

const NavContainer = styled.div`
    bottom: 0;
    background: var(--main-background-highlight-color);
    display: flex;
    flex-direction: row;
    justify-content: space-around;
    left: 0;
    position: fixed;
    top: auto;
    bottom: 0;
    width: 100%;
    transitions: all .3s;
    
    @media (min-width:980px) {
        flex-direction: column;
        justify-content: start;
        bottom: 0;
        left: 0;
        top: 0;
        width: 14rem;
    }
`;

const Nav: React.FC = () => {
    return (
        <NavContainer
            className={'u-flex u-flex-column'}
        >
            <LogoContainer>
                <img src={logo} alt="Logo" />
            </LogoContainer>

            <NavLinkItems>
                {NAV_LINKS.map(
                    ({id, to, title, Icon}) => (
                        <NavItem key={id} to={to} title={title} Icon={Icon}/>
                    )
                )}
            </NavLinkItems>
        </NavContainer>
    );
};

export default Nav;
