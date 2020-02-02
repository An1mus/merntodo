import React from 'react';
import styled from 'styled-components';
import {HashRouter, Switch, Route} from 'react-router-dom';
import Header from './common/Header/';
import Nav from './common/Nav/'
import Todo from './Todo';
import Progress from './Progress';
import Categories from './Categories';
import FallBackPage from './404';
import './App.css';

const AppContainer = styled.div`
    display: flex;
    justify-content: flex-end;
`;

const AppContent = styled.div`
    width: calc(100% - 10rem);
`;

const App: React.FC = () => {
    return (
        <HashRouter>
            <AppContainer className={'u-flex u-flex-row'}>
                <Nav/>
                <AppContent className={'u-flex u-flex-column'}>
                    <Header />
                    <Switch>
                        <Route exact path={'/'} component={Todo} />
                        <Route path={'/progress'} component={Progress}/>
                        <Route path={'/categories'} component={Categories}/>
                        <Route path={'*'} component={FallBackPage}/>
                    </Switch>
                </AppContent>
            </AppContainer>
        </HashRouter>
    );
};

export default App;
