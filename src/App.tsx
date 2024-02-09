import React from 'react';
import logo from './logo.svg';
import './App.css';
import './components/Hello';
import Hello from './components/Hello';
import Message from './components/Message';

function App() {
  return (
    <div className="App">
        <Hello/>
        <Message/>
    </div>
  );
}

export default App;
