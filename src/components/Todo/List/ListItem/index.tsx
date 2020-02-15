import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import { TodoItem } from '../../../../commons/types/todoItem';
import FilterIcon from '../../../common/FilterIcon';
import CategoryLabel from '../../../common/CategoryLabel';

interface Props {
    item: TodoItem,
    onDelete: (id: string) => void,
    updateTodo: (item: TodoItem) => void
}

const ListItemContainer = styled.div`
    border: 1px solid #EBEEFB;
    border-radius: 1rem;
    font-size: 0.875rem;
    align-items: center;
    display: flex;
    justify-content: start;
    margin-bottom: 0.5rem;
    padding: 1rem;
    width: 100%;
    
    .itemTitle{
        max-width: 25%;
        overflow: hidden;
    }
    
    .categoryLabel,
    .itemTitle {
        margin: 0 0 0 2.2rem;
    }
    
    .itemDeadline{ 
        margin: 0 1.3rem 0 auto;
    }
    
    input[type=checkbox]{
        margin-right: 1.3rem;
    }
    
    button {
        margin: 0;
    }
`;

const ListItem = ({onDelete, updateTodo, item}: Props) => {
    const [todoItem, setTodoItem] = useState(item);
    const {priority, name, category, isChecked, date, endDate} = todoItem;

    useEffect(() => {
        updateTodo(todoItem);
        }, [todoItem]);

    const checkItem = () => {
        setTodoItem({...todoItem, isChecked: !isChecked})
    };

    return (
        <ListItemContainer>
            <FilterIcon priority={priority}/>
            <p className={'itemTitle'}>{name}</p>
            <CategoryLabel name={category.name} color={"#41F1C6"}/>
            {/*
            <p>isChecked: {isChecked ? 'Yes' : 'No'}</p>
            <p>Date: {new Date(date).toISOString()}</p>
            <p>End date: {endDate ? new Date(endDate).toISOString() : 'No end date'}</p>
            */}
            <p className={'itemDeadline'}>{endDate ? {endDate} : 'One Time'}</p>
            <input type='checkbox' defaultChecked={isChecked} onChange={() => checkItem()} />
            <button onClick={() => onDelete(item.id)}>Delete</button>
        </ListItemContainer>
    )
};

export default ListItem;
