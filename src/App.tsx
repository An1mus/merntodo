import React from 'react';
import './App.scss';
import {HashRouter, Route, Routes} from "react-router-dom";
import {ToDoList, Settings, Stats} from "./routes";
import {AddItemPopup} from "./components";
import {Menu} from "./components/common";
import {observer} from "mobx-react-lite";
import {useAppStore} from "./mobx";

const App = observer(() => {
    const appStore = useAppStore();

    return (
        <div className={`app ${appStore.isDarkTheme ? 'dark' : 'light'}`}>
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

            {appStore.isAddingNewItem && <AddItemPopup />}
        </div>
    );
});

export default App;
