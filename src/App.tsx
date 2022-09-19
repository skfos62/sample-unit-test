import React from 'react';
import logo from './logo.svg';
import './App.css';
import Home from './pages';

function App() {
  const [counter,setCounter] = React.useState(0);
  const [disabled,setDisabled] = React.useState(false);
  return (
    <div className="App">
      <header className="App-header">
        <h3 data-testid='counter'>{counter}</h3>
        <div>
          <button data-testid='minus-button' disabled={disabled} onClick={()=>{setCounter(counter - 1)}}>-</button>
          <button data-testid='plus-button'  disabled={disabled}  onClick={()=>{setCounter(counter + 1)}}>+</button>
          <button data-testid='on/off-button' style={{backgroundColor: 'blue'}} onClick={()=>{setDisabled(prev=>!prev)}}>on/off</button>
        </div>
       <Home/>
      </header>
    </div>
  );
}

export default App;
