import React from 'react';
import './App.css';
import Header from './Header';
import Home from './Home';


function App() {
  return (
    // BEM conversion used small letters
    <div className="app">
      <Header />
      <Home />
      { /* Footer */}
    </div>
  );
}

export default App;
