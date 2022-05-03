export async function simulate() {
	return fetch(process.env.REACT_APP_SIMULATOR_URL + '/simulation')
		.then(response => response.json())
		.catch(err => console.log('Error at fetch: ', err));
}