

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