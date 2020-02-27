import React from 'react';
import NAV_LINKS from './nav.config';
import styled from 'styled-components';
import NavItem from './NavItem';
import logo from '../../../assets/logo.svg';

const LogoContainer = styled.div`
    box-sizing: border-box;
    margin: 2rem auto 6rem auto;
    pointer-events: none;
    display: flex;
    width: 10rem;    
    
    img {
        position: relative;
        width: 100%;
    }
`;

const NavContainer = styled.div`
    bottom: 0;
    background: white;
    display: flex;
    left: 0;
    position: fixed;
    top: 0;
    width: 14rem;
    transitions: all .3s;
    transform: translate(0, -100%);
    
    &.shown {
        transform: translate(0, 0)
    }
    
    @media (min-width:980px) {
        transform: translate(0, 0);
    }
`;

interface NavProps {
    isNavOpen: boolean,
}

const Nav: React.FC<NavProps> = ({isNavOpen}) => {
    return (
        <NavContainer
            className={'u-flex u-flex-column' + (isNavOpen ? ' shown' : '')}
        >
            <LogoContainer>
                <img src={logo} alt="Logo" />
            </LogoContainer>

            <div>
                {NAV_LINKS.map(
                    ({id, to, title, Icon}) => (
                        <NavItem key={id} to={to} title={title} Icon={Icon}/>
                    )
                )}
            </div>
        </NavContainer>
    );
};

export default Nav;
