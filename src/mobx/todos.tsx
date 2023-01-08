import React from "react";
import {makeAutoObservable} from "mobx";

interface ToDo {
    id: string;
    name: string;
    description: string;
}

export class ToDoListStore {
    items: ToDo[] = [
        {
            id: 'aoskdmaskdm',
            name: 'NAME',
            description: 'SOME TEXT'
        },
        {
            id: 'oqweoiqweioqwoijeq',
            name: 'NAME 2',
            description: 'Other description'
        }
    ];

    constructor() {
        makeAutoObservable(this);
    }
}

export const toDoListStoreObject = new ToDoListStore();
const ToDosContext = React.createContext(toDoListStoreObject);

export const useToDoListStore = () => React.useContext(ToDosContext);
