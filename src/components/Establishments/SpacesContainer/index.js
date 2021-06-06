import React, { useState } from "react";
import { Grid } from '@material-ui/core';
import useStyles from './styles';
import SpacesList from '../SpacesList';

export default function SpacesContainer({ initialSpaces, establishmentType, refreshEstablishments }) {
	const [spaces, setSpaces] = useState([...initialSpaces] || []);
	const classes = useStyles();

	React.useEffect(() => {
		setSpaces(initialSpaces);
	}, [initialSpaces]);

	return (
		<div className={classes.divContainer}>
			<Grid container>
				<Grid item xs={12}>
					<SpacesList spaces={spaces} establishmentType={establishmentType} refreshEstablishments={refreshEstablishments} />
				</Grid>
			</Grid>
		</div>
	);
}
