import React from 'react';
import {observer} from "mobx-react-lite";
import {useToDoListStore} from "../../../mobx";
import {Button} from "../../../components/common";
import {ReactComponent as DeleteIcon} from "../../../img/delete.svg";
import style from "./ToDoItem.module.scss";
import {ToDo} from "../../../types";

interface Props {
    todoItem: ToDo;
}

const ToDoItem: React.FC<Props> = observer(({todoItem}) => {
    const listStore = useToDoListStore();
    const {id, name, description, isDone} = todoItem;

    return <div className={style.ToDoItem}>
        <input type="checkbox" checked={isDone} onChange={() => listStore.toggleItem(todoItem)}/>
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
