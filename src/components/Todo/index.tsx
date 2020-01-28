import React from 'react';
import { connect } from 'react-redux';
import styled from 'styled-components';
import AddItemForm from './AddItemForm';
import todoActions from '../../redux/actions/todos';
import List from './List';
import { TodoItem } from '../../commons/types/todoItem';

const ListContainer = styled.div`
    margin: 0 auto;
    min-width: 24rem;
    padding: 3rem 0;
    width: 80%;
`;


interface Props {
    addTodo: (newItem: TodoItem) => void,
    deleteTodo: (name: string) => void,
    updateTodo: (newItem: TodoItem) => void,
    todos: TodoItem[]
}

const Todo = ({addTodo, deleteTodo, updateTodo, todos}: Props) => {
    return (
        <ListContainer>
            <AddItemForm addTodo={addTodo}/>
            <List todos={todos} onDelete={deleteTodo} updateTodo={updateTodo}/>
        </ListContainer>
    );
};

const mapStateToProps = (store: any) => {
    return {
        todos: store.todos
    }
};

const mapDispatchToProps = {
    addTodo: todoActions.addTodo,
    deleteTodo: todoActions.deleteTodo,
    updateTodo: todoActions.updateTodo,
};

export default connect(mapStateToProps, mapDispatchToProps)(Todo);
