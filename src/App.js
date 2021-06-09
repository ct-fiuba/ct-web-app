import React, {Component} from 'react';
import './App.css';
import Rules from './components/Rules/Rules';
import LogIn from './components/Auth/LogIn';
import SignUp from './components/Auth/SignUp';
import Home from './components/Home';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect
} from "react-router-dom";
import ForgotPassword from './components/Auth/ForgotPassword';
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

  logedIn() {
    return sessionStorage.getItem('accessToken') !== '-1'
  }

  logedInAdmin(component) {
    if (this.logedIn() && sessionStorage.getItem('role') === 'admin') {
        return component;
    }
    return <Redirect to="/admin/logIn" />
  }

  logedInOwner(component) {
    if (this.logedIn() && sessionStorage.getItem('role') === 'owner') {
        return component;
    }
    return <Redirect to="/owner/logIn" />
  }

  redirectIfLogedIn(component) {
    if (this.logedIn() && sessionStorage.getItem('role') === 'admin') {
      return <Redirect to="/reglas" />
    }
    if (this.logedIn() && sessionStorage.getItem('role') === 'owner') {
      return <Redirect to="/establecimientos" />
    }
    return component;
  }

  render() {
    return (
      <Router>
        <div>
          <Switch>
            <Route path="/establecimientos">
              {this.logedInOwner(<MyEstablishments />)}
            </Route>
            <Route path="/admin/login">
              {this.redirectIfLogedIn(<LogIn logInUrl={sessionUtils.getAdminLogInUrl()} isOwnerLogIn={false} />)}
            </Route>
            <Route path="/owner/login">
              {this.redirectIfLogedIn(<LogIn logInUrl={sessionUtils.getOwnerLogInUrl()} isOwnerLogIn={true} />)}
            </Route>
            <Route path="/owner/signUp">
              {this.redirectIfLogedIn(<SignUp />)}
            </Route>
            <Route path="/admin/forgotPassword">
              {this.redirectIfLogedIn(<ForgotPassword isOwnerLogIn={false} />)}
            </Route>
            <Route path="/owner/forgotPassword">
              {this.redirectIfLogedIn(<ForgotPassword isOwnerLogIn={true} />)}
            </Route>
            <Route path="/reglas">
              {this.logedInAdmin(<Rules />)}
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
