import React from 'react';
import styled from 'styled-components';
import { NavLink, withRouter } from 'react-router-dom';

const NavItemContainer = styled.div`
    align-items: center;
    cursor: pointer;
    display: flex;
    margin-bottom: 0.5rem;
    position: relative;
    width: 100%;
    
    &:before {
        background: var(--main-highlight-color);
        border-top-right-radius: 2rem;
        border-bottom-right-radius: 2rem;
        content: '';
        height: 100%;
        position: absolute;
        transition: all .3s;
        width: 0rem;
    }
    
    &.active {
        background: var(--nav-active-link-background);
    }
    
    &.active:before {
        transition: all .3s;
        width: 0.2rem;
    }
    
    .iconContainer {
        height: 1.2rem;
        width: 1.2rem;
        display: flex;
        align-items: center;
        justify-content: space-around;
        margin-right: 1rem;
        margin-left: 2.2rem;
    }
    
    svg {
        height: 100%;
        width: 100%;
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
        stroke: var(--main-highlight-icon-color);
        transition: all .3s;
    }
    
    &:hover .iconFill,
    &.active .iconFill {
        fill: var(--main-highlight-icon-color);
        transition: all .3s;
    }
    
    a {
        color: var(--main-idle-text-color);
        text-decoration: none;
        font-size: 1rem;
        line-height: 3;
    }
    
    &.active a {
        color: var(--main-text-color);
    }
`;

const NavItem = withRouter(({to, title, Icon, location}) => {
    const {pathname} = location;
    return (
        <NavItemContainer className={pathname === to ? 'active' : ''}>
            <div className="iconContainer">
                {Icon && <Icon/>}
            </div>
            <NavLink to={to}>{title}</NavLink>
        </NavItemContainer>
    )
});

export default NavItem;
