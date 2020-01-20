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


//TODO: change newItem to a correspondent type
interface Props {
    addTodo: (newItem: any) => void,
    deleteTodo: (newItem: any) => void,
    updateTodo: (newItem: any) => void,
    todos: TodoItem[]
}

const Todo = ({addTodo, deleteTodo, updateTodo, todos}: Props) => {
    return (
        <ListContainer>
            <AddItemForm addTodo={addTodo}/>
            <List todos={todos} onDelete={deleteTodo}/>
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
