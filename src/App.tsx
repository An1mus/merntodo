import React, {useState} from 'react';
import './App.scss';
import {Menu} from "./components/common";

function App() {
    const [theme, setTheme] = useState(true)
    return (
        <div className={`app ${theme ? 'light' : 'dark'}`}>
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
            </div>
        </div>
    );
}

export default App;
