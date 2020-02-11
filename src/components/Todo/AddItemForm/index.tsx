import React, { useState } from 'react';
import styled from 'styled-components';
import {createUniqueId} from '../../../commons/utilities';
import { TodoItem } from '../../../commons/types/todoItem';
import CATEGORIES from '../../../commons/config/itemCategories';

const FormComponent = styled.form`
    display: flex;
`;

const emptyItem: TodoItem = {
    id: '',
    priority: 'Regular',
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

    const handleSubmit = (e: any) => {
        e.preventDefault();

        addTodo({ ...emptyItem, id: createUniqueId(), name: itemTitle});

        setItemTitle('');
    };

    return (
        <FormComponent onSubmit={e => handleSubmit(e)}>
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
