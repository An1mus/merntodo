import React, {useState} from 'react';
import {useToDoListStore} from "../../../mobx";
import {observer} from "mobx-react-lite";
import style from './AddToDoItem.module.scss';
import Input from "../../../components/common/Input";
import Button from "../../../components/common/Button";
import TextArea from "../../../components/common/Textarea";
import Dropdown from "../../../components/common/Dropdown";
import {set} from "mobx";

const DURATIONS = ['once', 'everyday', 'every other day', 'once every 3 days', 'once per week'];

const AddToDoItem: React.FC = () => {
    const [newTodoItemName, setNewTodoItemName] = useState('');
    const [newTodoItemDescription, setNewTodoItemDescription] = useState('');

    const [duration, setDuration] = useState(DURATIONS[0]);
    const {addItemToTheList} = useToDoListStore();

    const handleNewItemAddition = () => {
        addItemToTheList(newTodoItemName, newTodoItemDescription );

        setNewTodoItemName('');
        setNewTodoItemDescription('');
    }

    return <div className={style.addToDoItemForm}>
        <div className={style.inputGroup}>
            <Input
                type="text"
                value={newTodoItemName}
                onChange={e => setNewTodoItemName(e.target.value)}
                placeholder={'name'}
            />
        </div>
        <div className={style.inputGroup}>
            <TextArea
                value={newTodoItemDescription}
                onChange={e => setNewTodoItemDescription(e.target.value)}
                placeholder={'description'}
            />
        </div>

        <Dropdown
            options={DURATIONS}
            selected={duration}
            onSelect={setDuration}
        />

        <Button
            onClick={() => handleNewItemAddition()}
        >
            Confirm
        </Button>
    </div>;
}

export default observer(AddToDoItem);
