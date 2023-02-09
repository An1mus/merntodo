import React from 'react';
import './App.scss';
import {HashRouter, Route, Routes} from "react-router-dom";
import {ToDoList, Settings, Stats} from "./routes";
import {Menu} from "./components";
import {observer} from "mobx-react-lite";
import {useSettingsStore} from "./mobx";

const App = observer(() => {
    const appStore = useSettingsStore();

    return (
        <div data-testid='app' className={`app ${appStore.isDarkTheme ? 'dark' : 'light'}`}>
            <HashRouter>
                <Menu />
                <div className="content-container">
                    <div className="content">
                        <Routes>
                            <Route path={'/'} element={<ToDoList />}/>
                            <Route path={'/settings'} element={<Settings />} />
                            <Route path={'/stats'} element={<Stats />} />
                        </Routes>
                    </div>
                </div>
            </HashRouter>
        </div>
    );
});

export default App;
