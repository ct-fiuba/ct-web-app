import React from "react";
import Rule from "../Rule";

const RulesList = React.memo(function RulesList({ rules, deleteRule, duplicateRule }) {
	return rules.map((rule) => (
		<Rule rule={rule} key={rule.id} deleteRule={deleteRule} duplicateRule={duplicateRule} />
	));
});

export default RulesList;
