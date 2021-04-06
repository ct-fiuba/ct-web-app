import React from "react";
import Rule from "../Rule";

const RulesList = React.memo(function RulesList({ rules, deleteRule }) {
	return rules.map((rule) => (
		<Rule rule={rule} key={rule.id} deleteRule={deleteRule} />
	));
});

export default RulesList;