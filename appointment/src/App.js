import React from 'react';
import './App.css';
import ComponentSwitcher from './components/ComponentSwitcher';

function App() {
    return (
        <div className ="App">
            <h1>Book appointment</h1>
            <ComponentSwitcher />
        </div>
    );
}

export default App;