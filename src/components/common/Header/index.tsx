import React from 'react';
import styles from './header.module.scss';

interface Props {
    onThemeUpdate: () => void
}

const Header: React.FC<Props> = ({onThemeUpdate}) => {
    const addToDoItem = () => {};

    return <header className={styles.header}>
        <h1>
            TD
        </h1>
        <button onClick={() => onThemeUpdate()}>
            Theme
        </button>
        <button onClick={() => addToDoItem()}>
            Add Item
        </button>
    </header>;
}

export default Header;
