import React from "react";
import Establishment from "../Establishment";

const EstablishmentsList = React.memo(function EstablishmentsList({ establishments, refreshEstablishments }) {
	return establishments.map((establishment) => (
		<Establishment establishment={establishment} key={establishment.id} refreshEstablishments={refreshEstablishments} />
	));
});

export default EstablishmentsList;