import React from 'react';
import './App.css';
import Header from './Header';
import Home from './Home';
import { BrowserRouter as Router, Routes, Route} from "react-router-dom";
import Checkout from "./Checkout";


function App() {
  return (
    // BEM conversion used small letters
    <Router>
      <div className="app">
        <Header />

        <Routes>
          <Route path="/checkout">
            <Checkout />
          </Route>
          <Route path="/">
            <Home />
            { /* Footer */}
          </Route>
        </Routes>
    </div>
    </Router>
    
  );
}

export default App;
