import {makeAutoObservable} from "mobx";
import React from "react";

class SettingsStore {
    isDarkTheme = true;

    constructor() {
        makeAutoObservable(this);
    }

    toggleTheme = () => {
        this.isDarkTheme = !this.isDarkTheme;
    }
}

const settingsStore = new SettingsStore();
const settingsStoreContext = React.createContext(settingsStore);

export const useSettingsStore = () => React.useContext(settingsStoreContext);
