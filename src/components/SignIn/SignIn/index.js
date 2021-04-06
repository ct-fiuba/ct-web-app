import React, { useState } from 'react';
import { Avatar, Button, CssBaseline, TextField, Link, Grid, Typography, Container } from '@material-ui/core';
import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
import SignInAlerts from '../SignInAlerts';
import AppBar from '../../Shared/AppBar';
import useStyles from './styles';

export default function SignIn() {
	const classes = useStyles();
	const [email, setEmail] = useState("");
	const [password, setPassword] = useState("");
	const [invalidEmailError, setInvalidEmailError] = useState(false);
	const [emailNotFoundError, setEmailNotFoundError] = useState(false);
	const [invalidPasswordError, setInvalidPasswordError] = useState(false);
	const [notAdminError, setNotAdminError] = useState(false);

	const handleCloseInvalidEmail = () => {
		setInvalidEmailError(false);
	}

	const handleCloseEmailNotFound = () => {
		setEmailNotFoundError(false);
	}

	const handleCloseInvalidPassword = () => {
		setInvalidPasswordError(false);
	}

	const handleCloseNotAdmin = () => {
		setNotAdminError(false);
	}

	const handleEmailChange = (event) => {
		setEmail(event.target.value);
	}

	const handlePasswordChange = (event) => {
		setPassword(event.target.value);
	}

	const clearInputs = () => {
		setEmail("");
		setPassword("");
	}

	const handleSignInButton = () => {
		const requestOptions = {
			method: 'POST',
			headers: { 'Content-Type': 'application/json' },
			body: JSON.stringify({ email, password })
		};
		fetch(process.env.REACT_APP_AUTH_SERVER_URL + '/signIn', requestOptions)
			.then(response => response.json())
			.then(dataSignIn => {
				if (dataSignIn.hasOwnProperty('reason')) {
					if (dataSignIn['reason'] === "INVALID_EMAIL") {
						setInvalidEmailError(true);
					}
					if (dataSignIn['reason'] === "INVALID_PASSWORD" || dataSignIn['reason'] === "MISSING_PASSWORD") {
						setInvalidPasswordError(true);
					}
					if (dataSignIn['reason'] === "EMAIL_NOT_FOUND") {
						setEmailNotFoundError(true);
					}
					clearInputs();
					return;
				}
				const getUserDataRequest = {
					method: 'POST',
					headers: { 'Content-Type': 'application/json' },
					body: JSON.stringify({ accessToken: dataSignIn['accessToken'] })
				};

				fetch(process.env.REACT_APP_AUTH_SERVER_URL + '/getUserData', getUserDataRequest)
					.then(response => response.json())
					.then(dataGetUserData => {
						if (dataGetUserData.hasOwnProperty('role') && dataGetUserData['role'] === "admin") {
							localStorage.setItem('userId', dataSignIn['userId']);
							localStorage.setItem('role', dataGetUserData['role']);
							window.location.replace("/reglas");
						} else {
							setNotAdminError(true);
							clearInputs();
						}
					})
			})
			.catch(err => console.log('Error al iniciar sesión: ', err));
	}

	return (
		<div>
			<AppBar />
			<Container component="main" maxWidth="xs">
				<CssBaseline />
				<div className={classes.paper}>
					<Avatar className={classes.avatar}>
						<LockOutlinedIcon />
					</Avatar>
					<Typography component="h1" variant="h5">
						Iniciar Sesión
        </Typography>
					<form className={classes.form} noValidate>
						<TextField
							variant="outlined"
							margin="normal"
							required
							fullWidth
							id="email"
							label="Email"
							name="email"
							autoComplete="email"
							autoFocus
							onChange={handleEmailChange}
							value={email}
						/>
						<TextField
							variant="outlined"
							margin="normal"
							required
							fullWidth
							name="password"
							label="Contraseña"
							type="password"
							id="password"
							autoComplete="current-password"
							onChange={handlePasswordChange}
							value={password}
						/>
						<Button
							fullWidth
							variant="contained"
							color="primary"
							className={classes.submit}
							onClick={handleSignInButton}
						>
							Iniciar Sesión
          </Button>
						<Grid container>
							<Grid item xs>
								<Link href="/recuperarContrasenia" variant="body2">
									¿Olvidaste tu contraseña?
              </Link>
							</Grid>
						</Grid>
					</form>
				</div>
				<SignInAlerts
					invalidEmail={invalidEmailError}
					handleCloseInvalidEmail={handleCloseInvalidEmail}
					emailNotFound={emailNotFoundError}
					handleCloseEmailNotFound={handleCloseEmailNotFound}
					invalidPassword={invalidPasswordError}
					handleCloseInvalidPassword={handleCloseInvalidPassword}
					notAdmin={notAdminError}
					handleCloseNotAdmin={handleCloseNotAdmin}
				/>
			</Container>
		</div>
	);
}