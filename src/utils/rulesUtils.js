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

export async function getRules() {
	return fetch(process.env.REACT_APP_USER_API_URL + '/rules')
		.then(response => response.json())
		.then(data => {
			for (let rule of data) {
				rule['id'] = rule['_id'];
			}
			data.sort(function (a, b) {
				return a.index - b.index;
			});
			return data;
		})
		.catch(err => console.log('Error at fetch: ', err));
}

export async function addNewRules(new_rules) {
	const requestOptions = {
		method: 'POST',
		headers: { 'Content-Type': 'application/json' },
		body: JSON.stringify(new_rules)
	};
	return fetch(process.env.REACT_APP_USER_API_URL + '/rules', requestOptions)
}

export async function deleteRules(deleted_rules) {
	const requestOptions = {
		method: 'DELETE',
		headers: { 'Content-Type': 'application/json' },
		body: JSON.stringify(deleted_rules)
	};
	return fetch(process.env.REACT_APP_USER_API_URL + '/rules', requestOptions)
}

export async function updateRules(updated_rules) {
	const requestOptions = {
		method: 'PUT',
		headers: { 'Content-Type': 'application/json' },
		body: JSON.stringify(updated_rules)
	};
	return fetch(process.env.REACT_APP_USER_API_URL + '/rules', requestOptions)
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
