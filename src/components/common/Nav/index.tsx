import React from 'react';
import NAV_LINKS from './nav.config';
import styled from 'styled-components';
import NavItem from './NavItem';

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
