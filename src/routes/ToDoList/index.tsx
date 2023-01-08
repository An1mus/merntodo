import React from 'react';
import {useToDoListStore} from "../../mobx";
import ToDoItem from "./ToDoItem";
import {observer} from "mobx-react-lite";

interface Props {}

const ToDoList: React.FC<Props> = observer(() => {
    const {items} = useToDoListStore();

    return <>
        <h1>List</h1>
        {
            items.map((item) => <ToDoItem
                key={item.id}
                {...item}
            />)
        }
    </>;
});

export default ToDoList;
