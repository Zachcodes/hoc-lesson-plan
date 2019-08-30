import React from 'react';
import logo from './logo.svg';
import './App.css';
import DisplayName from './components/DisplayName';
import Filter from './components/Filter';

function App() {
  return (
    <div className="App">
      <DisplayName hello="world" />
      <Filter />
    </div>
  );
}

export default App;
