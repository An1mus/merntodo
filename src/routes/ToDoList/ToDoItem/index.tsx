import React from 'react';
import {observer} from "mobx-react-lite";
import {useToDoListStore} from "../../../mobx";
import {Button} from "../../../components/common";
import {ReactComponent as DeleteIcon} from "../../../img/delete.svg";

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
        <Button onClick={() => listStore.removeItemFromTheList(id)}>
            <DeleteIcon />
        </Button>
    </div>;
});

export default ToDoItem;
