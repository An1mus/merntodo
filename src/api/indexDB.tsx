import { openDB, IDBPDatabase } from 'idb';
import {ToDo} from "../types";

interface Settings {
    theme: string;
}

interface IndexedDBAPIInterface {
    getTodos: () => Promise<ToDo[]>;
    addTodo: (todo: ToDo) => Promise<IDBValidKey>;
    updateTodo: (todo: ToDo) => Promise<IDBValidKey>;
    deleteTodo: (id: string) => Promise<void>;
    getSettings: () => Promise<Settings>
    updateSettings: (settings: Settings) => Promise<void>
}

class IndexedDBAPI implements IndexedDBAPIInterface {
    dbPromise: Promise<IDBPDatabase<{ todos: ToDo[]; settings: Settings }>>;

    constructor() {
        this.dbPromise = openDB<{ todos: ToDo[]; settings: Settings }>('todo-app', 1, {
            upgrade(db) {
                if (!db.objectStoreNames.contains('todos')) {
                    db.createObjectStore('todos', { keyPath: 'id', autoIncrement: true });
                }
                if (!db.objectStoreNames.contains('settings')) {
                    db.createObjectStore('settings', { keyPath: 'id' });
                }
            },
        });
    }

    async getTodos(): Promise<ToDo[]> {
        const db = await this.dbPromise;
        return db.getAll('todos');
    }

    async addTodo(todo: ToDo): Promise<IDBValidKey> {
        const db = await this.dbPromise;
        const tx = db.transaction('todos', 'readwrite');
        const addRequest = tx.store.add(todo);
        await tx.done;
        return addRequest;
    }

    async updateTodo(todo: ToDo): Promise<IDBValidKey> {
        const db = await this.dbPromise;
        const tx = db.transaction('todos', 'readwrite');
        const updateRequest = tx.store.put(todo);
        await tx.done;
        return updateRequest;
    }

    async deleteTodo(id: string): Promise<void> {
        const db = await this.dbPromise;
        const tx = db.transaction('todos', 'readwrite');
        tx.store.delete(id);
        await tx.done;
    }

    async getSettings(): Promise<Settings> {
        const db = await this.dbPromise;
        return db.get('settings', 1);
    }

    async updateSettings(settings: Settings): Promise<void> {
        const db = await this.dbPromise;
        const tx = db.transaction('settings', 'readwrite');
        tx.store.put(settings, 1);
        await tx.done;
    }
}

const db = new IndexedDBAPI();

export default db;
