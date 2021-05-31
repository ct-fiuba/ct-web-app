import React from "react";
import Establishment from "../Establishment";

const EstablishmentsList = React.memo(function EstablishmentsList({ establishments }) {
	return establishments.map((establishment) => (
		<Establishment establishment={establishment} key={establishment.id} />
	));
});

export default EstablishmentsList;