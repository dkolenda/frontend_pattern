import React from 'react';
import logo from './logo.svg';
import './App.css';
import { C } from './dekorator/Decorator';

function App() {
  const temp = new C();
  return (
    <div className="App">
      Start
    </div>
  );
}

export default App;
