import * as sessionUtils from '../utils/sessionUtils';

export async function getRules() {
	if (!await sessionUtils.validateAdminAccessToken()) {
		sessionUtils.signOut();
	}
	return fetch(process.env.REACT_APP_USER_API_URL + '/rules', {
		headers: {'access-token': sessionStorage.getItem('accessToken')}
	})
		.then(response => response.json())
		.then(data => {
			if (data.includes('has expired')) {
				sessionUtils.signOut();
			}
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
	if (!await sessionUtils.validateAdminAccessToken()) {
		sessionUtils.signOut();
	}
	const requestOptions = {
		method: 'POST',
		headers: { 'Content-Type': 'application/json', 'access-token': sessionStorage.getItem('accessToken') },
		body: JSON.stringify(new_rules)
	};
	return fetch(process.env.REACT_APP_USER_API_URL + '/rules', requestOptions)
}

export async function deleteRules(deleted_rules) {
	if (!await sessionUtils.validateAdminAccessToken()) {
		sessionUtils.signOut();
	}
	const requestOptions = {
		method: 'DELETE',
		headers: { 'Content-Type': 'application/json', 'access-token': sessionStorage.getItem('accessToken') },
		body: JSON.stringify(deleted_rules)
	};
	return fetch(process.env.REACT_APP_USER_API_URL + '/rules', requestOptions)
}

export async function updateRules(updated_rules) {
	if (!await sessionUtils.validateAdminAccessToken()) {
		sessionUtils.signOut();
	}
	const requestOptions = {
		method: 'PUT',
		headers: { 'Content-Type': 'application/json', 'access-token': sessionStorage.getItem('accessToken') },
		body: JSON.stringify(updated_rules)
	};
	return fetch(process.env.REACT_APP_USER_API_URL + '/rules', requestOptions)
}