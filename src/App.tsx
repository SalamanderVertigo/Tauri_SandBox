import React from 'react';
import logo from './logo.svg';
import './App.css';
import { invoke } from '@tauri-apps/api/tauri'


function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.tsx</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React Today!
        </a>
        <button onClick={() => invoke('my_custom_command')}> Invoke</button>
        <button onClick={() => invoke('access_window_test',{ Window } )}> Invoke</button>
      </header>
    </div>
  );
}

export default App;
