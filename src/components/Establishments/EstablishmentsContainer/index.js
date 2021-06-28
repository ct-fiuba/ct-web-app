import React, { useState } from "react";
import { Grid } from '@material-ui/core';
import useStyles from './styles';
import EstablishmentsList from '../EstablishmentsList';
import NewEstablishmentButton from "../NewEstablishmentButton";
import CircularProgress from '@material-ui/core/CircularProgress';
import NoEstablishmentsMessage from "../NoEstablishmentsMessage";
import Typography from '@material-ui/core/Typography';

export default function EstablishmentsContainer({ establishments, refreshEstablishments }) {
	const [state, setState] = useState({ establishments: establishments });
	const classes = useStyles();

	React.useEffect(() => {
		setState({ establishments: establishments });
	}, [establishments])

	return (
		<div className={classes.divContainer}>
			<Grid container>
				<Grid item xs={8}>
					<Typography className={classes.title} variant="h6" component="h6">
						Mis establecimientos
					</Typography>
				</Grid>
				<Grid item xs={4}>
					<NewEstablishmentButton refreshEstablishments={refreshEstablishments} />
				</Grid>
				<Grid item xs={12}>
					{state.establishments === null &&
						<div className={classes.circularProgressContainer}>
							<CircularProgress className={classes.circularProgress} />
						</div>
					}
					{state.establishments !== null && state.establishments.length === 0 && <NoEstablishmentsMessage />}
					{state.establishments !== null && state.establishments.length > 0 &&
						<EstablishmentsList establishments={state.establishments} refreshEstablishments={refreshEstablishments} />
					}
				</Grid>
			</Grid>
		</div>
	);
}
