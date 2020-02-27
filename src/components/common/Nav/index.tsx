import React from 'react';
import NAV_LINKS from './nav.config';
import styled from 'styled-components';
import NavItem from './NavItem';

const LogoContainer = styled.div`
    margin: 2rem auto 6rem 2.15rem;
    display: flex;
    width: 100%;    
    
    p {
        border: 1px solid red; 
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
                <p>Todo logo placeholder</p>
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
