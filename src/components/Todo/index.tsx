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
    padding: 2rem 0 0 0;
    width: 100%;
`;


interface Props {
    addTodo: (newItem: TodoItem) => void,
    deleteTodo: (id: string) => void,
    updateTodo: (newItem: TodoItem) => void,
    todos: TodoItem[]
}

const Todo = ({addTodo, deleteTodo, updateTodo, todos}: Props) => {
    return (
        <>
            <AddItemForm addTodo={addTodo}/>

            <ListContainer>
                <h2>
                    Your To-Dos
                </h2>
                <List todos={todos} onDelete={deleteTodo} updateTodo={updateTodo}/>
            </ListContainer>
        </>
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
