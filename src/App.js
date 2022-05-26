import React from 'react';
import Container from './Components/Container'
import Header from './Components/Header'
import Theme from './Components/Theme'
import './App.css'
import Tutorial from './Components/Tutorial';
import Contact from './Components/Contact'

function App() {
  return (
    <div className="App">
        <div className="header"><Header/></div>
        <div ><Theme/></div>
        <div className="container"><Container/></div>
        <div ><Tutorial/></div>
        <div><Contact/></div>
    </div>
  );
}

export default App;
