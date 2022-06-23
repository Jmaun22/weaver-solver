
import './App.css';

import React from 'react';
import 'bulma/css/bulma.min.css';

import NavBar from "./componets/navBar"
import Solver from "./componets/solverArea"

function App() {
  return (
    <div className="App">
      <header className="App-header">
      <NavBar/>
      <Solver/>



      </header>
    </div>
  );
}

export default App;
