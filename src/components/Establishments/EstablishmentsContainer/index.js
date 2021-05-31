import React, { useState } from "react";
import { Grid } from '@material-ui/core';
import useStyles from './styles';
import EstablishmentsList from '../EstablishmentsList';

export default function EstablishmentsContainer({ establishments }) {
	const [state, setState] = useState({ establishments: establishments || [] });
	const classes = useStyles();

	React.useEffect(() => {
		setState({ establishments: establishments });
	}, [establishments])

	return (
		<div className={classes.divContainer}>
			<Grid container>
				<Grid item xs={12}>
					<h1>Mis establecimientos</h1>
				</Grid>
				<Grid item xs={12}>
					<EstablishmentsList establishments={state.establishments} />
				</Grid>
			</Grid>
		</div>
	);
}
