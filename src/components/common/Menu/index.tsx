import styles from './index.module.scss';
import NavLink from "./NavLink";

import {ReactComponent as List} from '../../../img/nav/list-check.svg';
import {ReactComponent as Settings} from '../../../img/nav/gear.svg';
import {ReactComponent as Stats} from '../../../img/nav/clipboard-data.svg';
import React from "react";
import Logo from "../Logo";

const MenuItems = [
    {
        name: 'List',
        path: '/',
        icon: <List />
    },
    {
        name: 'Settings',
        path: '/settings',
        icon: <Settings />
    },
    {
        name: 'Stats',
        path: '/stats',
        icon: <Stats />
    }
];

const Menu = () => {
    return <div className={styles.nav}>
        <Logo/>
        <nav>
            {MenuItems.map(link => <NavLink key={link.path} {...link} />)}
        </nav>
    </div>
}

export default Menu;
