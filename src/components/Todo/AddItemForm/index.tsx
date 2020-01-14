import React, { useState } from 'react';
import styled from 'styled-components';

const FormComponent = styled.form`
    display: flex;
`;

const AddItemForm = () => {
    const [itemTitle, setItemTitle] = useState('');
    const formSubmit = (e: any) => {
        e.preventDefault();

        setItemTitle('');
    };

    return (
        <FormComponent onSubmit={e => formSubmit(e)}>
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
