import React from 'react';
import styles from './header.module.scss';
import {useAppStore} from "../../../mobx";
import {observer} from "mobx-react-lite";

interface Props {
    onThemeUpdate: () => void
}

const Header: React.FC<Props> = observer(({onThemeUpdate}) => {
    const appStore = useAppStore();

    return <header className={styles.header}>
        <h1>
            TD
        </h1>
        <button onClick={() => onThemeUpdate()}>
            Theme
        </button>
        <button onClick={() => appStore.startAddingNewItem()}>
            Add Item
        </button>
    </header>;
});

export default Header;
