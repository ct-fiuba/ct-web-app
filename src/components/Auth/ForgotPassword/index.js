import React, { useState } from 'react';
import { Avatar, Button, CssBaseline, TextField, Link, Grid, Typography, Container } from '@material-ui/core';
import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
import LogInAlerts from '../LogInAlerts';
import AppBar from '../../Shared/AppBar';
import useStyles from './styles';

export default function ForgotPassword({isOwnerLogIn}) {
	const classes = useStyles();
	const [email, setEmail] = useState("");
	const [invalidEmailError, setInvalidEmailError] = useState(false);
	const [emailNotFoundError, setEmailNotFoundError] = useState(false);
	const [successPasswordReset, setSuccessPasswordReset] = useState(false);

	const handleCloseInvalidEmail = () => {
		setInvalidEmailError(false);
	}

	const handleCloseEmailNotFound = () => {
		setEmailNotFoundError(false);
	}

	const handleCloseSuccessPasswordReset = () => {
		setSuccessPasswordReset(false);
	}


	const handleEmailChange = (event) => {
		setEmail(event.target.value);
	}

	const clearInputs = () => {
		setEmail("");
	}

	const handleForgotPasswordButton = () => {
		const requestOptions = {
			method: 'POST',
			headers: { 'Content-Type': 'application/json' },
			body: JSON.stringify({ email })
		};
		fetch(process.env.REACT_APP_AUTH_SERVER_URL + '/sendPasswordResetEmail', requestOptions)
			.then(response => response.json())
			.then(data => {
				if (data.hasOwnProperty('reason')) {
					if (data['reason'] === "INVALID_EMAIL") {
						setInvalidEmailError(true);
					}
					if (data['reason'] === "EMAIL_NOT_FOUND") {
						setEmailNotFoundError(true);
					}
					clearInputs();
					return;
				}
				setSuccessPasswordReset(true);
			})
			.catch(err => console.log('Error al recuperar contraseña: ', err));
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
						Recuperar contraseña
        	</Typography>
					<Typography component="h8" variant="h8">
						Ingresá el email asociado a tu cuenta para poder enviar un correo de recuperación de contraseña
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
						<Button
							fullWidth
							variant="contained"
							color="primary"
							className={classes.submit}
							onClick={handleForgotPasswordButton}
						>
							Enviar mail
          </Button>
						<Grid container>
							<Grid item xs>
								<Link href={`/${isOwnerLogIn ? 'owner' : 'admin'}/logIn`} variant="body2">
									Iniciar sesión
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
					successPasswordReset={successPasswordReset}
					handleCloseSuccessPasswordReset={handleCloseSuccessPasswordReset}
				/>
			</Container>
		</div>
	);
}