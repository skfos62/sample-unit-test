import React from 'react';
import '../App.css';
import Test from './Test';

function Home() {
  return (
    <div className="App">
      <header className="App-header">

        <p>
          Edit <code>src/App.tsx</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>

        <Test />
        
      </header>
    </div>
  );
}

export default Home;
