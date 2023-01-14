import React from 'react';
import {observer} from "mobx-react-lite";
import {useToDoListStore} from "../../../mobx";
import {Button} from "../../../components/common";
import {ReactComponent as DeleteIcon} from "../../../img/delete.svg";
import style from "./ToDoItem.module.scss";

interface Props {
    id: string;
    name: string,
    description: string,
    isDone: boolean
}

const ToDoItem: React.FC<Props> = observer(({id, name, description, isDone}) => {
    const listStore = useToDoListStore();

    return <div className={style.ToDoItem}>
        <input type="checkbox" checked={isDone} onChange={() => listStore.toggleItem(id)}/>
        <p className={style.name}>
            {name}
        </p>
        <p className={style.description}>
            {description}
        </p>
        <div className={style.buttons}>
            <Button onClick={() => listStore.removeItemFromTheList(id)}>
                <DeleteIcon />
            </Button>
        </div>
    </div>;
});

export default ToDoItem;
