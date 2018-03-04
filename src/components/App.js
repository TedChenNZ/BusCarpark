import React from 'react';
import CarparkContainer from './Carpark';
import Input from './Input';
import './App.css';

const App = ({ bus }) => (
  <div className='app'>
    <Input />
    <CarparkContainer />
  </div>
);

export default App;
