import React from 'react';
import Avatar from '@material-ui/core/Avatar';
import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import TextField from '@material-ui/core/TextField';
import Link from '@material-ui/core/Link';
import Grid from '@material-ui/core/Grid';
import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
import Typography from '@material-ui/core/Typography';
import Container from '@material-ui/core/Container';
import SignInAlerts from '../SignInAlerts';
import AppBar from '../../Shared/AppBar';
import useStyles from './styles';

export default function ForgotPassword() {
	const classes = useStyles();
	const [email, setEmail] = React.useState("");
	const [invalidEmailError, setInvalidEmailError] = React.useState(false);
	const [emailNotFoundError, setEmailNotFoundError] = React.useState(false);
	const [successPasswordReset, setSuccessPasswordReset] = React.useState(false);

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
								<Link href="/iniciarSesion" variant="body2">
									Iniciar sesión
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
					successPasswordReset={successPasswordReset}
					handleCloseSuccessPasswordReset={handleCloseSuccessPasswordReset}
				/>
			</Container>
		</div>
	);
}