import React from 'react';
import './App.css';
import Display from './components/DisplayComponents/CalculatorDisplay';
import NumberButton from './components/ButtonComponents/NumberButton'

const App = () => {
  return (
    <div>
      <Display/>
      <NumberButton/>
    </div>
  );
};

export default App;
