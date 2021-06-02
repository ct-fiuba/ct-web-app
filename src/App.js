import React, {Component} from 'react';
import './App.css';
import NewEstablishmentForm from './components/Establishments/NewEstablishmentsForms/NewEstablishmentForm';
import Rules from './components/Rules/Rules';
import SignIn from './components/SignIn/SignIn';
import SignUp from './components/SignIn/SignUp';
import Home from './components/Home';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect
} from "react-router-dom";
import ForgotPassword from './components/SignIn/ForgotPassword';
import * as sessionUtils from './utils/sessionUtils';
import MyEstablishments from './components/Establishments/MyEstablishments';

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
    return <Redirect to="/admin/signIn" />
  }

  signedInOwner(component) {
    if (this.signedIn() && sessionStorage.getItem('role') === 'owner') {
        return component;
    }
    return <Redirect to="/owner/signIn" />
  }

  redirectIfSignedIn(component) {
    if (this.signedIn() && sessionStorage.getItem('role') === 'admin') {
      return <Redirect to="/reglas" />
    }
    if (this.signedIn() && sessionStorage.getItem('role') === 'owner') {
      return <Redirect to="/misEstablecimientos" />
    }
    return component;
  }

  render() {
    return (
      <Router>
        <div>
          <Switch>
            <Route path="/nuevoEstablecimiento">
              {this.signedInOwner(<NewEstablishmentForm />)}
            </Route>
            <Route path="/misEstablecimientos">
              {this.signedInOwner(<MyEstablishments />)}
            </Route>
            <Route path="/admin/signIn">
              {this.redirectIfSignedIn(<SignIn signInUrl={sessionUtils.getAdminSignInUrl()} isOwnerSignIn={false} />)}
            </Route>
            <Route path="/owner/signIn">
              {this.redirectIfSignedIn(<SignIn signInUrl={sessionUtils.getOwnerSignInUrl()} isOwnerSignIn={true} />)}
            </Route>
            <Route path="/owner/signUp">
              {this.redirectIfSignedIn(<SignUp />)}
            </Route>
            <Route path="/admin/forgotPassword">
              {this.redirectIfSignedIn(<ForgotPassword isOwnerSignIn={false} />)}
            </Route>
            <Route path="/owner/forgotPassword">
              {this.redirectIfSignedIn(<ForgotPassword isOwnerSignIn={true} />)}
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
