import React from 'react';
import { AppBar, Toolbar, Typography, Button, IconButton} from '@material-ui/core';
import HomeIcon from '@material-ui/icons/Home';
import useStyles from './styles';
import * as sessionUtils from '../../../utils/sessionUtils';

export default function SimpleAppBar({loggedIn}) {
	const classes = useStyles();

	const signOut = () => {
		sessionUtils.signOut();
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
				{loggedIn ? (<Button onClick={signOut} color="inherit">Cerrar sesión</Button>) : null}
			</Toolbar>
		</AppBar>
	);
}
