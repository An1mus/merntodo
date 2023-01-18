import React from 'react';
import {useToDoListStore} from "../../mobx";
import ToDoItem from "./ToDoItem";
import {observer} from "mobx-react-lite";
import AddToDoItem from "./AddToDoItem";
import styles from './ToDoList.module.scss';

interface Props {}

const ToDoList: React.FC<Props> = observer(() => {
    const {items} = useToDoListStore();

    return <div className={styles.todoList}>
        <div className={styles.listContent}>
            <div className={styles.list}>
                {
                    items.map((item) => <ToDoItem
                        key={item.id}
                        todoItem={item}
                    />)
                }
            </div>

            <div className={styles.form}>
                <AddToDoItem />
            </div>
        </div>
    </div>;
});

export default ToDoList;
