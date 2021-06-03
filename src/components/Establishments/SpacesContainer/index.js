import React, { useState } from "react";
import { Grid } from '@material-ui/core';
import useStyles from './styles';
import SpacesList from '../SpacesList';

export default function SpacesContainer({ spaces, refreshEstablishments }) {
	const [state, setState] = useState({ spaces: spaces || [] });
	const classes = useStyles();

	const cmpSpaces = (a, b) => {
		if (a.enabled === b.enabled) {
			return 0;
		} else if (a.enabled && !b.enabled) {
			return -1;
		} else {
			return 1;
		}
	}

	React.useEffect(() => {
		spaces.sort(cmpSpaces);
		console.log("DEBUG TOMI !!!!: ", spaces);
		setState({ spaces: spaces });
	}, [spaces])

	return (
		<div className={classes.divContainer}>
			<Grid container>
				<Grid item xs={12}>
					<SpacesList spaces={state.spaces} refreshEstablishments={refreshEstablishments} />
				</Grid>
			</Grid>
		</div>
	);
}
