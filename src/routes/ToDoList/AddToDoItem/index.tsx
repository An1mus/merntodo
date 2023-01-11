import React from 'react';
import {useAppStore, useToDoListStore} from "../../../mobx";
import {observer} from "mobx-react-lite";
import styles from './AddToDoItem.module.scss';
import Input from "../../../components/common/Input";

interface Props {

}

const AddToDoItem: React.FC<Props> = () => {
    const {newTodoItem, setNewItemName, setNewItemDescription} = useAppStore();
    const {addItemToTheList} = useToDoListStore();

    return <div className={styles.addToDoItemForm}>
        <Input
            type="text"
            value={newTodoItem.name || ''}
            onChange={e => setNewItemName(e.target.value)}
            placeholder={'name'}
        />
        <textarea
            value={newTodoItem.description || ''}
            onChange={e => setNewItemDescription(e.target.value)}
            placeholder={'description'}
        />
        <button
            onClick={() => addItemToTheList(newTodoItem)}
        >
            Confirm
        </button>
    </div>;
}

export default observer(AddToDoItem);
