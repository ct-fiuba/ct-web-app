import React, { useState } from "react";
import { Grid } from '@material-ui/core';
import useStyles from './styles';
import SpacesList from '../SpacesList';

export default function SpacesContainer({ spaces }) {
	const [state, setState] = useState({ spaces: spaces || [] });
	const classes = useStyles();

	React.useEffect(() => {
		setState({ spaces: spaces });
	}, [spaces])

	return (
		<div className={classes.divContainer}>
			<Grid container>
				<Grid item xs={12}>
					<SpacesList spaces={state.spaces} />
				</Grid>
			</Grid>
		</div>
	);
}
