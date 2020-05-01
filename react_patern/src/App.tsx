import React from 'react';
import './App.css';
import {RenderProps } from './RenderProps/RenderProps';
import { FunctionAsChild } from './FunctionAsChild/FunctionAsChild';
import { Hoc } from './hoc/Hoc';

function App() {
  return (
    <div className="App">
      <RenderProps/>
      <FunctionAsChild />
      <Hoc />
    </div>
  );
}

export default App;
