import React from 'react';
import './App.css';
import Checkout from './components/Checkout/Checkout.js';
import Rules from './components/Rules/Rules.js';
import SignIn from './components/SignIn/SignIn.js';
import Home from './components/Home/Home.js';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";

function App() {
  return (
    <Router>
    <div>
      <Switch>
        <Route path="/nuevoEstablecimiento">
          <Checkout />
        </Route>
        <Route path="/iniciarSesion">
          <SignIn />
        </Route>
        <Route path="/reglas">
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
