import React from 'react';
import {observer} from "mobx-react-lite";
import {useToDoListStore} from "../../../mobx";

interface Props {
    id: string;
    name: string,
    description: string,
    isDone: boolean
}

const ToDoItem: React.FC<Props> = observer(({id, name, description, isDone}) => {
    const listStore = useToDoListStore();

    return <div>
        <input type="checkbox" checked={isDone} onChange={() => listStore.toggleItem(id)}/>
        <p>
            {name}
        </p>
        <p>
            {description}
        </p>
        <button onClick={() => listStore.removeItemFromTheList(id)}>
            Delete item
        </button>
    </div>;
});

export default ToDoItem;
