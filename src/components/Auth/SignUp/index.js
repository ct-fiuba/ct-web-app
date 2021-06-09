import React, { useState } from 'react';
import { Avatar, Button, CssBaseline, TextField, Link, Grid, Typography, Container } from '@material-ui/core';
import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
import LogInAlerts from '../LogInAlerts';
import AppBar from '../../Shared/AppBar';
import useStyles from './styles';

export default function SignUp() {
	const classes = useStyles();
	const [email, setEmail] = useState("");
	const [password, setPassword] = useState("");
	const [invalidEmailError, setInvalidEmailError] = useState(false);
	const [emailNotFoundError, setEmailNotFoundError] = useState(false);
	const [invalidPasswordError, setInvalidPasswordError] = useState(false);

	const handleCloseInvalidEmail = () => {
		setInvalidEmailError(false);
	}

	const handleCloseEmailNotFound = () => {
		setEmailNotFoundError(false);
	}

	const handleCloseInvalidPassword = () => {
		setInvalidPasswordError(false);
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

	const handleSignUpButton = () => {
		const requestOptions = {
			method: 'POST',
			headers: { 'Content-Type': 'application/json' },
			body: JSON.stringify({ email, password })
		};
		fetch(process.env.REACT_APP_AUTH_SERVER_URL + '/owners/signUp', requestOptions)
			.then(response => response.json())
			.then(dataSignUp => {
				if (dataSignUp.hasOwnProperty('reason')) {
					if (dataSignUp['reason'] === "INVALID_EMAIL") {
						setInvalidEmailError(true);
					}
					if (dataSignUp['reason'] === "INVALID_PASSWORD" || dataSignUp['reason'] === "MISSING_PASSWORD") {
						setInvalidPasswordError(true);
					}
					if (dataSignUp['reason'] === "EMAIL_NOT_FOUND") {
						setEmailNotFoundError(true);
					}
					clearInputs();
					return;
				}
				if (dataSignUp.hasOwnProperty('role')) {
					sessionStorage.setItem('accessToken', dataSignUp['accessToken']);
					sessionStorage.setItem('userId', dataSignUp['userId']);
					sessionStorage.setItem('role', dataSignUp['role']);
					if (dataSignUp['role'] === "admin") {
						window.location.replace("/reglas");
					}
					if (dataSignUp['role'] === "owner") {
						window.location.replace("/establecimientos");
					}
				}
			})
			.catch(err => console.log('Error al crear cuenta: ', err));
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
						Crear cuenta de establecimiento
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
							onClick={handleSignUpButton}
						>
							Crear cuenta
          </Button>
						<Grid container>
							<Grid item xs={12}>
								<Link href={'/owner/login'} variant="body2">
									¿Ya tenes cuenta?
              </Link>
							</Grid>
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
				/>
			</Container>
		</div>
	);
}