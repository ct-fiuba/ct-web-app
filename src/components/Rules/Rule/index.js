import React from "react";
import RuleCard from "../RuleCard";

export default function Rule({ rule, deleteRule }) {
	return (<RuleCard id={rule.id}
		contagionRisk={rule.contagionRisk}
		durationValue={rule.durationValue}
		durationCmp={rule.durationCmp}
		m2Value={rule.m2Value}
		m2Cmp={rule.m2Cmp}
		openSpace={rule.openSpace}
		n95Mandatory={rule.n95Mandatory}
		vaccinated={rule.vaccinated}
		vaccineReceived={rule.vaccineReceived}
		vaccinatedDaysAgoMin={rule.vaccinatedDaysAgoMin}
		covidRecovered={rule.covidRecovered}
		covidRecoveredDaysAgoMax={rule.covidRecoveredDaysAgoMax}
		index={rule.index}
		deleteRule={deleteRule} />);
}
