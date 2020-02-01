import React from 'react';
import {NavLink} from 'react-router-dom';
import NAV_LINKS from './nav.config';
import styled from 'styled-components';

const NavContainer = styled.div`

`;

const Nav: React.FC = () => {
    return (
        <NavContainer className={'u-flex u-flex-column'}>
            {NAV_LINKS.map(
                (link) => (<NavLink key={link.id} to={link.to}>{link.title}</NavLink>)
            )}
        </NavContainer>
    );
};

export default Nav;
