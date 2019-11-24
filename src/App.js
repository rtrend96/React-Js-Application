import React from 'react';
import './App.css';
import Header from './Header.js';
import Footer from './Footer.js';
import Nav from './Nav.js';
import Main from './Main.js';


function App() {
  return (
    <div className="App">
      <Header />
      <Footer />
      <div className="row">
        <Main />
        <Nav />
      </div>
    </div>
  );
}

export default App;
