import * as sessionUtils from '../utils/sessionUtils';

export async function getEstablishments() {
	return fetch(process.env.REACT_APP_USER_API_URL + '/establishments/owner/' + sessionStorage.getItem('userId'), {
		headers: {'access-token': sessionStorage.getItem('accessToken')}
	})
		.then(response => response.json())
		.then(data => {
			if (data.includes('has expired')) {
				sessionUtils.signOut();
			}
			console.log(data);
			for (let establishment of data) {
				establishment['id'] = establishment['_id'];
			}
			return data;
		})
		.catch(err => console.log('Error at fetch: ', err));
}