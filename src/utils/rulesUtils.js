export function calculateNewRuleIndex(new_rules, contagionRisk) {
	if (contagionRisk === 'Alto') {
		return 0;
	}
	for (var i = 0; i < new_rules.length; i++) {
		if (new_rules[i].contagionRisk === contagionRisk || (contagionRisk === 'Medio' && new_rules[i].contagionRisk === 'Bajo')){
			return i;
		}
	}
	return new_rules.length;
}

export function updateIndexesFromAddition(new_rules, indexAdded) {
	new_rules.forEach(rule => {
		if (rule['index'] >= indexAdded) {
			rule['index'] = rule['index'] + 1;
		}
	});
	return new_rules;
}

export function updateIndexesFromDeletion(new_rules, indexDeleted) {
	new_rules.forEach(rule => {
		if (rule['index'] > indexDeleted) {
			rule['index'] = rule['index'] - 1;
		}
	});
	return new_rules;
}

export function reorder(list, startIndex, endIndex) {
	const result = Array.from(list);
	const [removed] = result.splice(startIndex, 1);
	result.splice(endIndex, 0, removed);

	result.forEach(function (rule, i) {
		rule.index = i;
	});

	return result;
}

function cmpRulesRisk(r1, r2) {
	if (r1.contagionRisk === r2.contagionRisk) {
		return r1.index < r2.index ? -1 : 1;
	}
	return (r1.contagionRisk === 'Alto' || r2.contagionRisk === 'Bajo') ? -1 : 1;
}

export function forceHighMidLowOrder(rules) {
	return rules.sort(cmpRulesRisk);
}

export function areRulesEqual(new_rules, saved_rules) {
	if (new_rules.length !== saved_rules.length) {
		return false;
	}

	for (const saved_rule of saved_rules) {
		const current_rule = new_rules.filter(rule => rule['id'] === saved_rule.id)
		if (current_rule.length === 0) {
			// deleted
			return false;
		}
		if (current_rule[0].index !== saved_rule.index) {
			// updated
			return false;
		}
	}
	return true;
}
