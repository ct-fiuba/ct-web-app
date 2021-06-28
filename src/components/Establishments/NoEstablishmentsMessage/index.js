import React from "react";
import { Grid } from '@material-ui/core';
import useStyles from './styles';
import NewReleasesIcon from '@material-ui/icons/NewReleases';
import Typography from '@material-ui/core/Typography';

export default function NoEstablishmentsMessage() {
	const classes = useStyles();

	return (
		<div>
			<Grid container>
				<Grid item xs={12} className={classes.gridItem}>
					<div className={classes.iconContainer}>
						<NewReleasesIcon className={classes.icon} />
					</div>
					<Typography className={classes.message} variant="h6" component="h6">
						¡Es momento de registrar tu primer establecimiento!
					</Typography>
				</Grid>
			</Grid>
		</div>
	);
}
