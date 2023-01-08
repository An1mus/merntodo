import React from 'react';
import {observer} from "mobx-react-lite";
import {useAppStore} from "../../mobx";
import {useToDoListStore} from "../../mobx";

interface Props {
}

const AddItemPopUp: React.FC<Props> = observer(() => {
    const {newTodoItem, setNewItemName, setNewItemDescription, stopAddingNewItem} = useAppStore();
    const {addItemToTheList} = useToDoListStore();

    const onItemAdded = () => {
        addItemToTheList(newTodoItem);
        stopAddingNewItem();
    }

    return <div>
        <input
            type="text"
            value={newTodoItem.name || ''}
            onChange={e => setNewItemName(e.target.value)}
        />
        <textarea
            name="description"
            value={newTodoItem.description || ''}
            onChange={e => setNewItemDescription(e.target.value)}
        ></textarea>
        <button
            onClick={() => stopAddingNewItem()}
        >
            Cancel
        </button>
        <button
            onClick={() => onItemAdded()}
        >
            Confirm
        </button>
    </div>;
});

export default AddItemPopUp;
