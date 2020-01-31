import React from 'react';
import './App.css';
import {HashRouter, Switch, Route} from 'react-router-dom';
import Header from './common/Header/';
import Nav from './common/Nav/'
import Todo from './Todo';
import Progress from './Progress';

const App: React.FC = () => {
    return (
        <HashRouter>
            <div className={'u-flex u-flex-row'}>
                <Nav/>
                <div className={'u-flex u-flex-column'}>
                    <Header />
                    <Switch>
                        <Route exact path={'/'} component={Todo} />
                        <Route path={'/progress'} component={Progress}/>
                    </Switch>
                </div>
            </div>
        </HashRouter>
    );
};

export default App;
