import React from "react";
import Space from "../Space";

const SpacesList = React.memo(function SpacesList({ spaces, refreshEstablishments }) {
	return spaces.map((space) => (
		<Space space={space} key={space._id} refreshEstablishments={refreshEstablishments} />
	));
});

export default SpacesList;