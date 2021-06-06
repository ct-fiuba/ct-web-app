import React from "react";
import SpaceCard from "../SpaceCard";

export default function Space({ space, refreshEstablishments }) {
	return (<SpaceCard id={space._id}
		name={space.name}
		m2={space.m2}
		hasExit={space.hasExit}
		openPlace={space.openPlace}
		estimatedVisitDuration={space.estimatedVisitDuration}
		enabled={space.enabled}
		n95Mandatory={space.n95Mandatory}
		establishmentId={space.establishmentId}
		establishmentType={space.establishmentType}
		refreshEstablishments={refreshEstablishments}
	/>);
}