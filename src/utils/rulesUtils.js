export function calculateNewRuleIndex(new_rules, contagionRisk) {
	for (var i = 0; i < new_rules.length; i++) {
		if (new_rules[i].contagionRisk === contagionRisk){
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

export function forceHighMidLowOrder(rules) {
	const q_per_risk = {'Alto': 0, 'Medio': 0, 'Bajo': 0};
	rules.forEach(rule => {
		q_per_risk[rule.contagionRisk] += 1;
	});
	const current_index_per_risk = {'Alto': 0, 'Medio': q_per_risk['Alto'], 'Bajo': q_per_risk['Alto'] + q_per_risk['Medio']};
	rules.forEach(rule => {
		if (rule['contagionRisk'] === 'Alto') {
			rule['index'] = current_index_per_risk['Alto'];
			current_index_per_risk['Alto'] += 1;
		}
		if (rule['contagionRisk'] === 'Medio') {
			rule['index'] = current_index_per_risk['Medio'];
			current_index_per_risk['Medio'] += 1;
		}
		if (rule['contagionRisk'] === 'Bajo') {
			rule['index'] = current_index_per_risk['Bajo'];
			current_index_per_risk['Bajo'] += 1;
		}
	});
	return rules.sort((r1, r2) => {return r1.index < r2.index ? -1 : 1});
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
