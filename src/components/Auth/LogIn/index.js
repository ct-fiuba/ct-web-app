import React, { useState } from 'react';
import { Avatar, Button, CssBaseline, TextField, Link, Grid, Typography, Container } from '@material-ui/core';
import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
import LogInAlerts from '../LogInAlerts';
import AppBar from '../../Shared/AppBar';
import useStyles from './styles';

export default function LogIn({ logInUrl, isOwnerLogIn }) {
	const classes = useStyles();
	const [email, setEmail] = useState("");
	const [password, setPassword] = useState("");
	const [invalidEmailError, setInvalidEmailError] = useState(false);
	const [emailNotFoundError, setEmailNotFoundError] = useState(false);
	const [invalidPasswordError, setInvalidPasswordError] = useState(false);
	const [notAdminError, setNotAdminError] = useState(false);
	const [notOwnerError, setNotOwnerError] = useState(false);

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

	const handleCloseNotOwner = () => {
		setNotOwnerError(false);
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

	const handleLogInButton = () => {
		const requestOptions = {
			method: 'POST',
			headers: { 'Content-Type': 'application/json' },
			body: JSON.stringify({ email, password })
		};
		fetch(logInUrl, requestOptions)
			.then(response => response.json())
			.then(dataLogIn => {
				if (dataLogIn.hasOwnProperty('reason')) {
					if (dataLogIn['reason'] === "INVALID_EMAIL") {
						setInvalidEmailError(true);
					}
					if (dataLogIn['reason'] === "INVALID_PASSWORD" || dataLogIn['reason'] === "MISSING_PASSWORD") {
						setInvalidPasswordError(true);
					}
					if (dataLogIn['reason'] === "EMAIL_NOT_FOUND") {
						setEmailNotFoundError(true);
					}
					if (dataLogIn['reason'].includes("admin")) {
						setNotAdminError(true);
					}
					if (dataLogIn['reason'].includes("owner")) {
						setNotOwnerError(true);
					}
					clearInputs();
					return;
				}
				if (dataLogIn.hasOwnProperty('role')) {
					sessionStorage.setItem('accessToken', dataLogIn['accessToken']);
					sessionStorage.setItem('userId', dataLogIn['userId']);
					sessionStorage.setItem('role', dataLogIn['role']);
					if (dataLogIn['role'] === "admin") {
						window.location.replace("/reglas");
					}
					if (dataLogIn['role'] === "owner") {
						window.location.replace("/establecimientos");
					}
				}
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
						Iniciar Sesión como {isOwnerLogIn ? 'Establecimiento' : 'Administrador'}
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
							onClick={handleLogInButton}
						>
							Iniciar Sesión
						</Button>
						<Grid container>
							<Grid item xs={12}>
								<Link href={`/${isOwnerLogIn ? 'owner' : 'admin'}/forgotPassword`} variant="body2">
									¿Olvidaste tu contraseña?
								</Link>
							</Grid>
							{
								isOwnerLogIn &&
								<Grid item xs={12}>
									<Link href={'/owner/signup'} variant="body2">
										¿No tenes cuenta?
									</Link>
								</Grid>
							}
						</Grid>
					</form>
				</div>
				<LogInAlerts
					invalidEmail={invalidEmailError}
					handleCloseInvalidEmail={handleCloseInvalidEmail}
					emailNotFound={emailNotFoundError}
					handleCloseEmailNotFound={handleCloseEmailNotFound}
					invalidPassword={invalidPasswordError}
					handleCloseInvalidPassword={handleCloseInvalidPassword}
					notAdmin={notAdminError}
					handleCloseNotAdmin={handleCloseNotAdmin}
					notOwner={notOwnerError}
					handleCloseNotOwner={handleCloseNotOwner}
				/>
			</Container>
		</div>
	);
}