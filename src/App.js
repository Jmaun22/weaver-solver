
import './App.css';

import React from 'react';
import 'bulma/css/bulma.min.css';
import { Button } from 'react-bulma-components';


import NavBar from "./componets/navBar"

function App() {
  return (
    <div className="App">
      <header className="App-header">
      <NavBar/>
  



  <Button color="primary">My Bulma button</Button>

      </header>
    </div>
  );
}

export default App;
