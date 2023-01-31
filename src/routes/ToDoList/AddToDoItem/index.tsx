import React, {useState} from 'react';
import {useToDoListStore} from "../../../mobx";
import {observer} from "mobx-react-lite";
import style from './AddToDoItem.module.scss';
import Input from "../../../components/common/Input";
import Button from "../../../components/common/Button";
import TextArea from "../../../components/common/Textarea";
import Dropdown from "../../../components/common/Dropdown";
import {Duration} from "../../../types";

const DURATIONS = Object.values(Duration);

const AddToDoItem: React.FC = () => {
    const [newTodoItemName, setNewTodoItemName] = useState('');
    const [newTodoItemDescription, setNewTodoItemDescription] = useState('');
    const [nameError, setNameError] = useState(false);
    const [duration, setDuration] = useState(Duration.ONCE);

    const {addItemToTheList} = useToDoListStore();

    const handleNewItemAddition = async () => {
        if(!newTodoItemName) {
            setNameError(true);
            const pulse = setTimeout(() => {
                setNameError(false);
                clearTimeout(pulse);
            }, 3000);
            return;
        }


        await addItemToTheList(newTodoItemName, newTodoItemDescription, duration);

        setNewTodoItemName('');
        setNewTodoItemDescription('');
        setDuration(DURATIONS[0]);
    }

    return <div className={style.addToDoItemForm}>
        <div className={style.inputGroup}>
            <Input
                isError={nameError}
                id={'name'}
                type="text"
                value={newTodoItemName}
                onChange={e => setNewTodoItemName(e.target.value)}
                placeholder={'name*'}
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
                onSelect={value => setDuration(Duration[value as keyof typeof Duration])}
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
