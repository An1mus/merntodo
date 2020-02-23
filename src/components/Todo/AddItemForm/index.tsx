import React, { useState } from 'react';
import styled from 'styled-components';
import { createUniqueId } from '../../../commons/utilities';
import { TodoItem } from '../../../commons/types/todoItem';
import CATEGORIES from '../../../commons/config/itemCategories';
import { Priority } from '../../../commons/types/Priority';

const FormComponent = styled.form`
    display: flex;
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

    const handleSubmit = (e: any) => {
        e.preventDefault();

        addTodo({ ...emptyItem, id: createUniqueId(), name: itemTitle, priority: Priority[itemPriority]});

        setItemTitle('');
    };

    return (
        <FormComponent onSubmit={e => handleSubmit(e)}>
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
