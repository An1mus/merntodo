import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import { TodoItem } from '../../../commons/types/todoItem';
import FilterIcon from '../../common/FilterIcon';
import CategoryLabel from '../../common/CategoryLabel';
import {ReactComponent as Clock} from '../../../assets/icons/clock.svg';

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
    transition: all .3s;
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
        display: flex;
        vertical-align: center;
    }
    
    .itemDeadline span {
        color: var(--main-idle-text-color);
        margin-right: 0.3rem;
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
    const {priority, name, category, isChecked, endDate} = todoItem;

    const displayDate = new Date(endDate);

    useEffect(() => {
        updateTodo(todoItem);
        }, [todoItem]);

    const checkItem = () => {
        setTodoItem({...todoItem, isChecked: !isChecked})
    };

    return (
        <ListItemContainer style={{opacity: isChecked ? '0.7' : ''}}>
            <FilterIcon priority={priority}/>
            <p className={'itemTitle'}>{name}</p>
            <CategoryLabel name={category.name} color={category.color}/>
            {/*
            <p>isChecked: {isChecked ? 'Yes' : 'No'}</p>
            <p>Date: {new Date(date).toISOString()}</p>
            */}
            <p className={'itemDeadline'}>
                {endDate && <span><Clock /></span>}
                {endDate ? <span>{displayDate.getUTCDate()}</span> : <span>One Time</span>}
            </p>
            <input type='checkbox' defaultChecked={isChecked} onChange={() => checkItem()} />
            <button onClick={() => onDelete(item.id)}>Delete</button>
        </ListItemContainer>
    )
};

export default ListItem;
