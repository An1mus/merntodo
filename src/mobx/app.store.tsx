import {makeAutoObservable} from "mobx";
import React from "react";
import {NewToDo} from "./types";

class AppStore {
    newTodoItem = {} as NewToDo;
    isAddingNewItem = false;

    constructor() {
        makeAutoObservable(this);
    }

    setNewItemName = (name: string) => {
        this.newTodoItem = {
            ...this.newTodoItem,
            name
        };
    }

    setNewItemDescription = (description: string) => {
        this.newTodoItem = {
            ...this.newTodoItem,
            description
        };
    }

    startAddingNewItem = () => {
        this.isAddingNewItem = true;
    }

    stopAddingNewItem = () => {
        this.isAddingNewItem = false;
    }
}

const appStore = new AppStore();
const appStoreContext = React.createContext(appStore);

export const useAppStore = () => React.useContext(appStoreContext)
