import React from "react";
import {makeAutoObservable} from "mobx";

interface ToDo {
    name: string;
    description: string;
}

export class ToDoListStore {
    items: ToDo[] = [];

    constructor() {
        makeAutoObservable(this)
    }
}

export const toDoListStoreObject = new ToDoListStore();
const ToDosContext = React.createContext(toDoListStoreObject);

export const useToDoListStore = () => React.useContext(ToDosContext);
