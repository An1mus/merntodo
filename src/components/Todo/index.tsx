import React from 'react';
import { connect } from 'react-redux';
import styled from 'styled-components';
import AddItemForm from './AddItemForm';
import todoActions from '../../redux/actions/todos';
import List from './List';

const ListContainer = styled.div`
    margin: 0 auto;
    min-width: 24rem;
    padding: 3rem 0;
    width: 80%;
`;

const Todo = ({addTodo, deleteTodo, updateTodo, todos}: any) => {
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
