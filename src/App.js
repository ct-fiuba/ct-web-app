import React from 'react';
import './App.css';
import Checkout from './components/Checkout/Checkout.js';
import Rules from './components/Rules/Rules.js';
import Home from './components/Home/Home.js';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

function App() {
  return (
    <Router>
    <div>
      <Switch>
        <Route path="/qr">
          <Checkout />
        </Route>
        <Route path="/rules">
          <Rules />
        </Route>
        <Route path="/">
          <Home />
        </Route>
      </Switch>
    </div>
  </Router>
  );
}

export default App;
