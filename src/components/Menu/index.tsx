import React from "react";
import {Logo, ThemeSwitcher} from "../common";
import {useSettingsStore} from "../../mobx";
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
        icon: <List />,
    },
    {
        name: 'Stats',
        path: '/stats',
        icon: <Stats />,
    },
    {
        name: 'Settings',
        path: '/settings',
        icon: <Settings />,
        isHidden: true
    }
];

const Menu = () => {
    const settings = useSettingsStore();
    return <div className={styles.nav}>
        <div className={styles.navHeader}>
            <Logo/>
            <ThemeSwitcher isOn={settings.isDarkTheme} handleClick={() => settings.toggleTheme()}/>
        </div>

        <nav>
            {MenuItems.filter(link => !link.isHidden).map(link => <NavLink key={link.path} {...link} />)}
        </nav>
    </div>
}

export default observer(Menu);
