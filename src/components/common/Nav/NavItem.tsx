import React from 'react';
import styled from 'styled-components';
import { NavLink, withRouter } from 'react-router-dom';

const NavItemContainer = styled.div`
    align-items: center;
    cursor: pointer;
    display: flex;
    margin-bottom: 0;
    position: relative;
    width: auto;
    
    &.active {
        background: var(--nav-active-link-background);
    }
    
    &:before {
        background: var(--main-highlight-color);
        border-top-right-radius: 2rem;
        border-top-left-radius: 2rem;
        content: '';
        height: 0;
        position: absolute;
        bottom: 0;
        transition: all .3s;
        width: 100%;
    }
    
    &.active:before {
        transition: all .3s;
        height: 0.2rem;
    }
    
    
    .iconContainer {
        height: 4rem;
        width: 4.5rem;
        display: flex;
        align-items: center;
        justify-content: space-around;
        margin-right: 0;
        margin-left: 0;
    }
    
    svg {
        height: 37%;
        width: 37%;
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
    
    .linkText {
        display: none;
    }
    
    @media(min-width: 980px) {
        display: initial;
        margin-bottom: 0.5rem;
        width: 100%;
        
        &:not(:last-child) {
            margin-right: 0;
        }
        
        &:before {
            border-top-left-radius: 0rem;
            border-bottom-right-radius: 2rem;
            height: 100%;
            width: 0rem;
        }
    
        &.active:before {
            height: 100%;
            width: 0.2rem;
        }
    
        .iconContainer {
            height: 1.2rem;
            width: 5rem;
            display: flex;
            align-items: center;
            justify-content: space-around;
            margin-right: 1rem;
            margin-left: 2.2rem;
        }
    }
`;

const NavItem = withRouter(({to, title, Icon, location}) => {
    const {pathname} = location;
    return (
        <NavItemContainer className={pathname === to ? 'active' : ''}>
            <div className="iconContainer">
                {Icon && <Icon/>}
            </div>
            <NavLink className={'linkText'} to={to}>{title}</NavLink>
        </NavItemContainer>
    )
});

export default NavItem;
