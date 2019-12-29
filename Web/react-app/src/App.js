import React from 'react';
import logo from './logo.svg';
import './App.css';
import MyButton from './components/my-button.js'

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <MyButton num={10} index={5} val={6}></MyButton>
        <MyButton num={6} index={5} val={6}></MyButton>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
