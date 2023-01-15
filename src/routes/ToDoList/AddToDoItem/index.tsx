import React from 'react';
import {useAppStore, useToDoListStore} from "../../../mobx";
import {observer} from "mobx-react-lite";
import style from './AddToDoItem.module.scss';
import Input from "../../../components/common/Input";
import Button from "../../../components/common/Button";
import TextArea from "../../../components/common/Textarea";

interface Props {}

const AddToDoItem: React.FC<Props> = () => {
    const {newTodoItem, setNewItemName, setNewItemDescription} = useAppStore();
    const {addItemToTheList} = useToDoListStore();

    return <div className={style.addToDoItemForm}>
        <div className={style.inputGroup}>
            <Input
                type="text"
                value={newTodoItem.name || ''}
                onChange={e => setNewItemName(e.target.value)}
                placeholder={'name'}
            />
        </div>
        <div className={style.inputGroup}>
            <TextArea
                value={newTodoItem.description || ''}
                onChange={e => setNewItemDescription(e.target.value)}
                placeholder={'description'}
            />
        </div>
        <Button
            onClick={() => addItemToTheList(newTodoItem)}
        >
            Confirm
        </Button>
    </div>;
}

export default observer(AddToDoItem);
