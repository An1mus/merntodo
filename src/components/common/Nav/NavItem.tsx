import React from 'react';
import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

const NavItemContainer = styled.div`
    align-items: center;
    cursor: pointer;
    display: flex;
    
    svg {
        margin-right: 1rem
    }
    
    .iconStroke,
    .iconFill {
        transition: all .3s;
    }
    
    .iconStroke {
        stroke: var(--main-idle-icon-color);
    }
    .iconFill {
        fill: var(--main-idle-icon-color);
    }
    
    &:hover .iconStroke,
    &.active .iconStroke {
        stroke: var(--main-highlight-color);
        transition: all .3s;
    }
    
    &:hover .iconFill,
    &.active .iconFill {
        fill: var(--main-highlight-color);
        transition: all .3s;
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
