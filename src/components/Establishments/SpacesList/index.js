import React from "react";
import Space from "../Space";

const cmpSpaces = (a, b) => {
	if (a.enabled === b.enabled) {
		return 0;
	} else if (a.enabled && !b.enabled) {
		return -1;
	} else {
		return 1;
	}
}

const SpacesList = React.memo(function SpacesList({ spaces, establishmentType, refreshEstablishments }) {
	spaces.sort(cmpSpaces);
	return spaces.map((space) => (
		<Space space={{...space, establishmentType}} key={space._id} refreshEstablishments={refreshEstablishments} />
	));
});

export default SpacesList;