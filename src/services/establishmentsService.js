import * as sessionUtils from '../utils/sessionUtils';

export async function getEstablishments() {
	if (!await sessionUtils.validateOwnerAccessToken()) {
		sessionUtils.signOut();
	}
	return fetch(process.env.REACT_APP_USER_API_URL + '/establishments/owner/' + sessionStorage.getItem('userId'), {
		headers: { 'access-token': sessionStorage.getItem('accessToken') }
	})
		.then(response => response.json())
		.then(data => {
			if (data instanceof String && data.includes('has expired')) {
				sessionUtils.signOut();
			}
			for (let establishment of data) {
				establishment['id'] = establishment['_id'];
			}
			return data;
		})
		.catch(err => console.log('Error at fetch: ', err));
}

export async function updateSpace(spaceId, spaceInfo) {
	if (!await sessionUtils.validateOwnerAccessToken()) {
		sessionUtils.signOut();
	}
	const requestOptions = {
		method: 'PUT',
		headers: { 'Content-Type': 'application/json', 'access-token': sessionStorage.getItem('accessToken') },
		body: JSON.stringify({ ...spaceInfo })
	};
	return fetch(process.env.REACT_APP_USER_API_URL + '/establishments/space/' + spaceId, requestOptions)
}

export async function updateEstablishment(establishmentId, establishmentInfo) {
	if (!await sessionUtils.validateOwnerAccessToken()) {
		sessionUtils.signOut();
	}
	const requestOptions = {
		method: 'PUT',
		headers: { 'Content-Type': 'application/json', 'access-token': sessionStorage.getItem('accessToken') },
		body: JSON.stringify(establishmentInfo)
};
return fetch(process.env.REACT_APP_USER_API_URL + '/establishments/' + establishmentId, requestOptions)
}

export async function downloadSpacePDF(spaceId, establishmentId) {
	window.open(process.env.REACT_APP_USER_API_URL + '/establishments/PDF/' + establishmentId + '/space/' + spaceId, '_blank');
}

export async function downloadEstablishmentPDF(establishmentId) {
	window.open(process.env.REACT_APP_USER_API_URL + '/establishments/PDF/' + establishmentId, '_blank');
}

export async function createNewEstablishment(establishmentInfo) {
	if (!await sessionUtils.validateOwnerAccessToken()) {
		sessionUtils.signOut();
	}
	const requestOptions = {
		method: 'POST',
		headers: { 'Content-Type': 'application/json', 'access-token': sessionStorage.getItem('accessToken') },
		body: JSON.stringify(establishmentInfo)
	};
	fetch(process.env.REACT_APP_USER_API_URL + '/establishments', requestOptions)
		.then(response => response.json())
		.then(data => {
			if (data instanceof String && data.includes('has expired')) {
				return sessionUtils.signOut();
			}
			const establishment_id = data['_id'];
			window.open(process.env.REACT_APP_USER_API_URL + '/establishments/PDF/' + establishment_id, '_blank');
		})
		.catch(err => console.log('Error at fetch: ', err));
};

export async function addSingleSpace(spaceInfo) {
	if (!await sessionUtils.validateOwnerAccessToken()) {
		sessionUtils.signOut();
	}
	const requestOptions = {
		method: 'POST',
		headers: { 'Content-Type': 'application/json', 'access-token': sessionStorage.getItem('accessToken') },
		body: JSON.stringify(spaceInfo)
	};
	return fetch(process.env.REACT_APP_USER_API_URL + '/establishments/space', requestOptions)
		.then(response => response.json())
		.then(data => {
			if (data instanceof String && data.includes('has expired')) {
				return sessionUtils.signOut();
			}
			return data;
		})
		.catch(err => console.log('Error at fetch: ', err));
};