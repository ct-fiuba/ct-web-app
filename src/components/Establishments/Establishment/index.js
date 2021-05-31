import React from "react";
import EstablishmentCard from "../EstablishmentCard";

export default function Establishment({ establishment }) {
	return (<EstablishmentCard id={establishment.id}
		name={establishment.name}
		type={establishment.type}
		address={establishment.address}
		city={establishment.city}
		state={establishment.state}
		country={establishment.country}
		zip={establishment.zip}
		spaces={establishment.spaces}
		spacesInfo={establishment.spacesInfo}
	/>);
}