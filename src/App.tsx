import React, {useState} from 'react';
import './App.scss';
import {Header, Menu} from "./components/common";
import {HashRouter, Route, Routes} from "react-router-dom";
import {ToDoList, Settings} from "./routes";
import {AddItemPopup} from "./components";
import {observer} from "mobx-react-lite";
import {useAppStore} from "./mobx/app";

const App = observer(() => {
    const appStore = useAppStore();
    const [theme, setTheme] = useState(true);

    return (
        <div className={`app ${theme ? 'light' : 'dark'}`}>
            <HashRouter>
                <Menu />
                <div className="content-container">
                    <Header onThemeUpdate={() => setTheme(theme => !theme)}/>
                    <div className="content">
                        <Routes>
                            <Route path={'/'} element={<ToDoList />}/>
                            <Route path={'/settings'} element={<Settings />} />
                        </Routes>
                    </div>
                </div>
            </HashRouter>

            {appStore.isAddingNewItem && <AddItemPopup />}
        </div>
    );
});

export default App;
