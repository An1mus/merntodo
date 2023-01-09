import styles from './index.module.scss';
import NavLink from "./NavLink";

import {ReactComponent as List} from '../../../img/nav/list-check.svg';
import {ReactComponent as Settings} from '../../../img/nav/gear.svg';
import {ReactComponent as Stats} from '../../../img/nav/clipboard-data.svg';

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
    return <nav className={styles.nav}>
        {MenuItems.map(link => <NavLink key={link.path} {...link} />)}
    </nav>
}

export default Menu;
