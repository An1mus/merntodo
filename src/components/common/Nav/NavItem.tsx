import React from 'react';
import styled from 'styled-components';
import {NavLink} from 'react-router-dom';

const NavItemContainer = styled.div`
    align-items: center;
    cursor: pointer;
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

export default NavItem;
