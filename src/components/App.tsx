import React from 'react';
import styled from 'styled-components';
import {HashRouter, Switch, Route} from 'react-router-dom';
import Header from './commons/Header/';
import Nav from './commons/Nav/'
import TodoList from './Todo';
import Karma from './Karma';
import Categories from './Categories';
import FallBackPage from './404';
import './App.css';
import todoActions from '../redux/actions/todos';
import { connect } from 'react-redux';
import { TodoItem } from '../commons/types/todoItem';

const AppContainer = styled.div`
    display: flex;
    justify-content: flex-end;
`;

const AppContent = styled.div`
    box-sizing: border-box;
    font-family: 'Proxima Nova', sans-serif;
    padding: 0 2.5rem 4.2rem 2.5rem;
    width: 100%;
    
    @media (min-width:980px) {
        width: calc(100% - 14rem);
    }
`;

interface Props {
    addTodo: (newItem: TodoItem) => void,
    deleteTodo: (id: string) => void,
    updateTodo: (newItem: TodoItem) => void,
    todos: TodoItem[]
}

const App: React.FC<Props> = ({addTodo, deleteTodo, updateTodo, todos}) => {
    return (
        <HashRouter>
            <AppContainer className={'u-flex u-flex-row'}>
                <Nav/>
                <AppContent className={'u-flex u-flex-column'}>
                    <Header addTodo={addTodo}/>
                    <Switch>
                        <Route exact path={'/'} render={() => (
                            <TodoList
                                todos={todos}
                                deleteTodo={deleteTodo}
                                updateTodo={updateTodo}
                            />
                        )} />
                        <Route path={'/karma'} component={Karma}/>
                        <Route path={'/categories'} component={Categories}/>
                        <Route path={'*'} component={FallBackPage}/>
                    </Switch>
                </AppContent>
            </AppContainer>
        </HashRouter>
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

export default connect(mapStateToProps, mapDispatchToProps)(App);
