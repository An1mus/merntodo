import React, { useState } from 'react';
import styled from 'styled-components';

const FormComponent = styled.form`
    display: flex;
`;

const AddItemForm = ({addTodo}: any) => {
    const [itemTitle, setItemTitle] = useState('');
    const handleSubmit = (e: any) => {
        e.preventDefault();

        addTodo(itemTitle);
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
