import React from "react";
import {makeAutoObservable} from "mobx";
import {v4 as uuid4} from 'uuid';
import {ToDo} from "../types";
import {db} from '../api'
import {formatDate} from "../utils";

const INITIAL_TODO_ITEM: ToDo = {
    id: '007',
    name: 'Add more',
    description: 'add some more fancy stuff to experiment with the list',
    duration: 'once',
    isDone: false
};

export class ToDoListStore {
    items: ToDo[] = [];

    constructor() {
        makeAutoObservable(this);

        this.fetchTodos();
    }

    addItemToTheList = async (name: string, description: string, duration: string) => {
        const newItem = {
            id: uuid4(),
            name,
            description,
            duration,
            isDone: false,
        };

        const addRequest = await db.addTodo(newItem);
        if(addRequest) this.items.unshift(newItem);
    }

    removeItemFromTheList = async (id: string) => {
        await db.deleteTodo(id);
        this.items = this.items.filter(item => item.id !== id);
    }

    toggleItem = async (todoItem: ToDo) => {
        const newTodoItem = {...todoItem, isDone: !todoItem.isDone};

        await db.updateTodo(newTodoItem);
        this.items = this.items.map(item => item.id !== todoItem.id ? item : newTodoItem);

        await db.putHistoricalData({date: formatDate(new Date()), count: this.percentageOfItemsDone})
    }

    fetchTodos = async () => {
        const todoItems = await db.getTodos();
        this.items = todoItems.length > 0 ? todoItems : [INITIAL_TODO_ITEM];
    }

    get percentageOfItemsDone() {
        const done = this.items.reduce((p, c) => c.isDone ? p + 1 : p, 0);
        return Math.ceil(done / this.items.length * 100)
    }
}

export const toDoListStoreObject = new ToDoListStore();
const ToDosContext = React.createContext(toDoListStoreObject);

export const useToDoListStore = () => React.useContext(ToDosContext);
