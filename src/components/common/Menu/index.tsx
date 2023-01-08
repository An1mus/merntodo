import styles from './index.module.scss';

const MenuItems = [
    {
        name: 'List',
        path: '/'
    },
    {
        name: 'Settings',
        path: '/settings'
    }
];

const Menu = () => {
    return <nav className={styles.nav}>
        {MenuItems.map(({path, name}) => <a key={name} href={path}>{name}</a>)}
    </nav>
}

export default Menu;
