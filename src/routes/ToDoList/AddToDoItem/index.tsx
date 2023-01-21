import React, {useState} from 'react';
import {useToDoListStore} from "../../../mobx";
import {observer} from "mobx-react-lite";
import style from './AddToDoItem.module.scss';
import Input from "../../../components/common/Input";
import Button from "../../../components/common/Button";
import TextArea from "../../../components/common/Textarea";
import Dropdown from "../../../components/common/Dropdown";

const DURATIONS = ['once', 'everyday', '1 in 2 days', '1 in 3 days', 'once per week'];

const AddToDoItem: React.FC = () => {
    const [newTodoItemName, setNewTodoItemName] = useState('');
    const [newTodoItemDescription, setNewTodoItemDescription] = useState('');
    const [duration, setDuration] = useState(DURATIONS[0]);

    const {addItemToTheList} = useToDoListStore();

    const handleNewItemAddition = () => {
        addItemToTheList(newTodoItemName, newTodoItemDescription, duration);

        setNewTodoItemName('');
        setNewTodoItemDescription('');
        setDuration(DURATIONS[0]);
    }

    return <div className={style.addToDoItemForm}>
        <div className={style.inputGroup}>
            <Input
                id={'name'}
                type="text"
                value={newTodoItemName}
                onChange={e => setNewTodoItemName(e.target.value)}
                placeholder={'name'}
            />
        </div>

        <div className={style.inputGroup}>
            <TextArea
                id={'description'}
                value={newTodoItemDescription}
                onChange={e => setNewTodoItemDescription(e.target.value)}
                placeholder={'description'}
            />
        </div>

        <div className={style.inputGroup}>
            <Dropdown
                id={'duration'}
                options={DURATIONS}
                selected={duration}
                onSelect={setDuration}
            />
        </div>

        <Button
            id={'confirm'}
            onClick={() => handleNewItemAddition()}
        >
            Confirm
        </Button>
    </div>;
}

export default observer(AddToDoItem);
