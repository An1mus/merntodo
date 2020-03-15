import React, { useState } from 'react';
import styled from 'styled-components';
import { createUniqueId } from '../../../commons/utilities';
import { TodoItem } from '../../../commons/types/todoItem';
import CATEGORIES from '../../../commons/config/itemCategories';
import { Priority } from '../../../commons/types/Priority';

const FormComponent = styled.form`
    display: flex;
    margin: 2.5rem 0 0 0;
`;

const emptyItem: TodoItem = {
    id: '',
    priority: Priority.Low,
    name: '',
    description: '',
    isChecked: false,
    category: CATEGORIES.General,
    date: new Date(),
    endDate: '',
};

interface Props {
    addTodo: (item: TodoItem) => void,
}

const AddItemForm = ({addTodo}: Props) => {
    const [itemTitle, setItemTitle] = useState('');
    const [itemPriority, setItemPriority] = useState('0');
    const [categoryName, setItemCategory] = useState(CATEGORIES.General.name);

    const handleSubmit = (e: any) => {
        e.preventDefault();

        addTodo({
            ...emptyItem,
            endDate: new Date(),
            category: CATEGORIES[categoryName],
            id: createUniqueId(),
            name: itemTitle,
            priority: Priority[itemPriority]
        });

        setItemTitle('');
    };

    return (
        <FormComponent onSubmit={e => handleSubmit(e)}>
            <select value={categoryName} onChange={e => setItemCategory(e.target.value)}>
                <option value={CATEGORIES.General.name}>General</option>
                <option value={CATEGORIES.Gym.name}>Gym</option>
                <option value={CATEGORIES.Codding.name}>Codding</option>
                <option value={CATEGORIES.Chilling.name}>Chilling</option>
                <option value={CATEGORIES.Educating.name}>Educating</option>
                <option value={CATEGORIES.Work.name}>Work</option>
            </select>
            <select value={itemPriority} onChange={e => setItemPriority(e.target.value)}>
                <option value={'0'}>Low</option>
                <option value={'1'}>Medium</option>
                <option value={'2'}>High</option>
                <option value={'3'}>Critical</option>
            </select>
            <input
                type="text"
                placeholder='Item title'
                value={itemTitle}
                onChange={e => setItemTitle(e.target.value)}
            />
            <button type='submit'>Add item</button>
        </FormComponent>
    )
};

export default AddItemForm;
