import React, {Component} from 'react';
import './App.css';
import Checkout from './components/Checkout/Checkout.js';
import Rules from './components/Rules/Rules.js';
import SignIn from './components/SignIn/SignIn.js';
import Home from './components/Home/Home.js';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect
} from "react-router-dom";
import ForgotPassword from './components/SignIn/ForgotPassword';

class App extends Component {
  constructor(props) {
    super(props)

    if (!localStorage.hasOwnProperty('userId')) {
      localStorage.setItem('userId', '-1');
      localStorage.setItem('role', '');
    }
  }

  signedIn() {
    const usuarioId = localStorage.getItem('userId')
    return usuarioId !== '-1';
  }

  signedInAdmin(component) {
    if (this.signedIn() && localStorage.getItem('role') === 'admin') {
        return component;
    }
    return <Redirect to="/iniciarSesion" />
  }

  render() {
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
            <Route path="/recuperarContrasenia">
              <ForgotPassword />
            </Route>
            <Route path="/reglas">
              {this.signedInAdmin(<Rules />)}
            </Route>
            <Route path="/">
              <Home />
            </Route>
          </Switch>
        </div>
      </Router>
    );
  }
}
export default App;
