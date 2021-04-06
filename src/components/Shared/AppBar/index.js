import React from 'react';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import HomeIcon from '@material-ui/icons/Home';
import useStyles from './styles';

export default function SimpleAppBar(props) {
	const classes = useStyles();

	const signOut = () => {
		localStorage.setItem('userId', -1);
		localStorage.setItem('role', "");
		window.location.replace("/reglas");
	}

	const goHome = () => {
		window.location.replace("/");
	}

	return (
		<AppBar position="static">
			<Toolbar>
				<IconButton onClick={goHome} edge="start" className={classes.homeButton} color="inherit" aria-label="menu">
					<HomeIcon />
				</IconButton>
				<Typography variant="h6" className={classes.title}>
					Control de Pandemias
    		</Typography>
				{props.loggedIn ? (<Button onClick={signOut} color="inherit">Cerrar sesión</Button>) : null}
			</Toolbar>
		</AppBar>
	);
}
