import React, { useEffect } from 'react';
import './App.css';
import Header from './Header';
import Home from './Home';
import { BrowserRouter as Router, Routes, Route} from "react-router-dom";
import Checkout from './Checkout';
import {useStateValue } from './StateProvider';
import Login from './Login';
import { auth } from './firebase';


function App() {
  const [{}, dispatch] = useStateValue();

  useEffect(() => {

    auth.onAuthStateChanged((authUser) => {
      console.log("THE USER IS >>> ", authUser);

      if (authUser) {
        dispatch({
          type: 'SET_USER',
          user: authUser
        })
      }
      else {
        dispatch({
          type: 'SET_USER',
          user: null
        });
      }
    });
  }, []);
  return (
    // BEM conversion used small letters
    <Router>
      <div className="app">
        <Routes>
          <Route path='/login'>
            <Login />
          </Route>
          <Route path="/checkout">
          <Header />
            <Checkout />
          </Route>
          <Route path="/">
            <Header />
            <Home />
            { /* Footer */}
          </Route>
        </Routes>
      </div>
    </Router>
    
  );
}

export default App;
