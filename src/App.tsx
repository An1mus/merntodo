import React, {useState} from 'react';
import './App.scss';
import {Menu} from "./components/common";
import {HashRouter, Route, Routes} from "react-router-dom";
import {ToDoList, Settings} from "./routes";

function App() {
    const [theme, setTheme] = useState(true)
    return (
        <div className={`app ${theme ? 'light' : 'dark'}`}>
            <HashRouter>
                <Menu />
                <div className="content-container">
                    <header className="app-header">
                        <span>
                            ToTo
                        </span>
                        <button onClick={() => setTheme(prev => !prev)}>
                            Theme
                        </button>
                    </header>

                    <div className="content">
                            <Routes>
                                <Route path={'/'} element={<ToDoList />}/>
                                <Route path={'/settings'} element={<Settings />} />
                            </Routes>
                    </div>
                </div>
            </HashRouter>
        </div>
    );
}

export default App;
