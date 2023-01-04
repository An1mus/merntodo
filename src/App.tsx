import React, {useState} from 'react';
import './App.scss';

function App() {
    const [theme, setTheme] = useState(true)
    return (
        <div className={`${theme ? 'light' : 'dark'}`} onClick={() => setTheme(prev => !prev)}>
            <header className="App-header">
                ToTo
            </header>
        </div>
    );
}

export default App;
