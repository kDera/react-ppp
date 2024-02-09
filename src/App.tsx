import React from 'react';
import logo from './logo.svg';
import './App.css';
import './components/Hello';
import Hello from './components/Hello';
import Message from './components/Message';

import Profile from './components/Profile';

function App() {
  return (
    <div className="App">
        <Hello/>
        <Message/>
        <Profile name="dera"/>
        <Profile name="caleb"/>
        <Profile name="Fe"/>
    </div>
  );
}

export default App;
