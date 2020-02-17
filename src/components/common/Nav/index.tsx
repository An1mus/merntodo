import React from 'react';
import {NavLink} from 'react-router-dom';
import NAV_LINKS from './nav.config';
import styled from 'styled-components';

const NavItemContainer = styled.div`
    align-items: center;
    display: flex;
    margin-bottom: 0.5rem;
    
    svg {
        margin-right: 0.5rem
    }
`;

const NavItem = ({to, title, Icon}) => {
    return (
        <NavItemContainer>
            {Icon && <Icon/>}
            <NavLink to={to}>{title}</NavLink>
        </NavItemContainer>
    )
};

const NavContainer = styled.div`
    background: white;
    position: fixed;
    top: 0;
    left: 0;
    bottom: 0;
    width: 10rem;
`;

const Nav: React.FC = () => {
    return (
        <NavContainer className={'u-flex u-flex-column'}>
            {NAV_LINKS.map(
                ({id, to, title, Icon}) => (
                    <NavItem key={id} to={to} title={title} Icon={Icon}/>
                )
            )}
        </NavContainer>
    );
};

export default Nav;
