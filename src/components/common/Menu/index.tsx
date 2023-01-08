import styles from './index.module.scss';
import {Link} from "react-router-dom";

const MenuItems = [
    {
        name: 'List',
        path: '/'
    },
    {
        name: 'Settings',
        path: '/settings'
    },
    {
        name: 'Stats',
        path: '/stats'
    }
];

const Menu = () => {
    return <nav className={styles.nav}>
        {MenuItems.map(({path, name}) => <Link key={name} to={path}>{name}</Link>)}
    </nav>
}

export default Menu;
