import * as sessionUtils from '../utils/sessionUtils';

export async function getVaccines() {
	if (!await sessionUtils.validateAdminAccessToken()) {
		sessionUtils.signOut();
	}
	return fetch(process.env.REACT_APP_USER_API_URL + '/vaccines', {
		headers: {'access-token': sessionStorage.getItem('accessToken')}
	})
		.then(response => response.json())
		.then(data => {
			if (data.includes('has expired')) {
				sessionUtils.signOut();
			}
			return data;
		})
		.catch(err => console.log('Error at fetch: ', err));
}

export async function addNewVaccine(new_vaccine) {
	if (!await sessionUtils.validateAdminAccessToken()) {
		sessionUtils.signOut();
	}
	const requestOptions = {
		method: 'POST',
		headers: { 'Content-Type': 'application/json', 'access-token': sessionStorage.getItem('accessToken') },
		body: JSON.stringify(new_vaccine)
	};
	return fetch(process.env.REACT_APP_USER_API_URL + '/vaccines', requestOptions)
}

export async function deleteVaccine(deleted_vaccine) {
	if (!await sessionUtils.validateAdminAccessToken()) {
		sessionUtils.signOut();
	}
	const requestOptions = {
		method: 'DELETE',
		headers: { 'Content-Type': 'application/json', 'access-token': sessionStorage.getItem('accessToken') },
		body: JSON.stringify(deleted_vaccine)
	};
	return fetch(process.env.REACT_APP_USER_API_URL + '/vaccines', requestOptions)
}

export async function updateVaccine(updated_vaccine) {
	if (!await sessionUtils.validateAdminAccessToken()) {
		sessionUtils.signOut();
	}
	const requestOptions = {
		method: 'PUT',
		headers: { 'Content-Type': 'application/json', 'access-token': sessionStorage.getItem('accessToken') },
		body: JSON.stringify(updated_vaccine)
	};
	return fetch(process.env.REACT_APP_USER_API_URL + '/vaccines', requestOptions)
}
