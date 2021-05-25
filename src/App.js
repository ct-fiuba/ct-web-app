import React, {Component} from 'react';
import './App.css';
import Checkout from './components/Checkout/Checkout';
import Rules from './components/Rules/Rules';
import SignIn from './components/SignIn/SignIn';
import Home from './components/Home';
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

    if (!sessionStorage.hasOwnProperty('accessToken')) {
      sessionStorage.setItem('accessToken', '-1');
      sessionStorage.setItem('userId', '-1');
      sessionStorage.setItem('role', '');
    }
  }

  signedIn() {
    const usuarioId = sessionStorage.getItem('accessToken')
    return usuarioId !== '-1';
  }

  signedInAdmin(component) {
    if (this.signedIn() && sessionStorage.getItem('role') === 'admin') {
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
