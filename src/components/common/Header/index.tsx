import React from 'react';
import styles from './Header.module.scss';
import {observer} from "mobx-react-lite";

interface Props {
    onThemeUpdate: () => void
}

const Header: React.FC<Props> = observer(({onThemeUpdate}) => {
    return <header className={styles.header}>
        <button onClick={() => onThemeUpdate()}>
            Theme
        </button>
    </header>;
});

export default Header;
