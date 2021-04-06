export function updateIndexesFromAddition(new_rules) {
	for (let rule of new_rules) {
		rule['index'] = rule['index'] + 1;
	}
	return new_rules;
}

export function updateIndexesFromDeletion(new_rules, indexDeleted) {
	for (let rule of new_rules) {
		if (rule['index'] > indexDeleted) {
			rule['index'] = rule['index'] - 1;
		}
	}
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
