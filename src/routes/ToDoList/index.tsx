import React from 'react';
import {useAppStore, useToDoListStore} from "../../mobx";
import ToDoItem from "./ToDoItem";
import {observer} from "mobx-react-lite";

interface Props {}

const ToDoList: React.FC<Props> = observer(() => {
    const {items} = useToDoListStore();
    const appStore = useAppStore();

    return <>
        <h1>List</h1>

        <button onClick={() => appStore.startAddingNewItem()}>
            Add Item
        </button>
        {
            items.map((item) => <ToDoItem
                key={item.id}
                {...item}
            />)
        }
    </>;
});

export default ToDoList;
