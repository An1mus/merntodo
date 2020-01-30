import React from 'react';
import {NavLink} from 'react-router-dom';
import NAV_LINKS from './nav.config';

const Nav: React.FC = () => {
    return (
        <>
            {NAV_LINKS.map(
                (link) => (<NavLink key={link.id} to={link.to}>{link.title}</NavLink>)
            )}
        </>
    );
};

export default Nav;
