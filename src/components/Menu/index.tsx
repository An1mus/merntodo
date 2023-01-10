import React from "react";
import {Logo, ThemeSwitcher} from "../common";
import {useAppStore} from "../../mobx";
import {observer} from "mobx-react-lite";
import NavLink from "./NavLink";

import styles from './index.module.scss';

import {ReactComponent as List} from '../../img/nav/list-check.svg';
import {ReactComponent as Settings} from '../../img/nav/gear.svg';
import {ReactComponent as Stats} from '../../img/nav/clipboard-data.svg';

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
    const appStore = useAppStore();
    return <div className={styles.nav}>
        <div className={styles.navHeader}>
            <Logo/>
            <ThemeSwitcher isOn={appStore.isDarkTheme} handleClick={() => appStore.toggleTheme()}/>
        </div>

        <nav>
            {MenuItems.map(link => <NavLink key={link.path} {...link} />)}
        </nav>
    </div>
}

export default observer(Menu);
