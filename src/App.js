import React from 'react';
import Nav from './components/Navbar';
import Sidebar from './components/Sidebar';
import './App.css';
import Main from './components/Main';

function App() {
  return (
    <div className = "App">
     
    <Nav />
    <Sidebar /><Main/>
   
    </div>
  );
}

export default App;
