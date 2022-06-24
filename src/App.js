import React, { useState } from 'react'
import './App.css';
import NavBar from './Components/NavBar';
import Body from './Components/Body';
import Sidebar from './Components/Sidebar';
function App() {

  return (
    <div className="App">
      <div className='AppFlex'>
        <div className="navappflex">
          <Sidebar />
        </div>
        <div className="otherflex">
          <NavBar />      
          <Body />
        </div>
      </div>
        
    </div>
  );
}

export default App;