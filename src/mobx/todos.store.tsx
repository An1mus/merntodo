import React from "react";
import {makeAutoObservable} from "mobx";
import {v4 as uuid4} from 'uuid';
import {NewToDo, ToDo} from "./types";

export class ToDoListStore {
    items: ToDo[] = [];

    constructor() {
        makeAutoObservable(this);
    }

    addItemToTheList = ({name, description}: NewToDo) => {
        this.items.push({
            id: uuid4(),
            name,
            description,
            isDone: false,
        })
    }

    removeItemFromTheList = (id: string) => {
        this.items = this.items.filter(item => item.id !== id);
    }

    toggleItem = (id: string) => {
        this.items = this.items.map(item => item.id !== id ? item : {
            ...item,
            isDone: !item.isDone
        });
    }
}

export const toDoListStoreObject = new ToDoListStore();
const ToDosContext = React.createContext(toDoListStoreObject);

export const useToDoListStore = () => React.useContext(ToDosContext);
