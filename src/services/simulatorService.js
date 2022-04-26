export async function simulate() {
    console.log(process.env.REACT_APP_SIMULATOR_URL)
	return fetch(process.env.REACT_APP_SIMULATOR_URL + '/simulation')
		.then(response => response.json())
		.catch(err => console.log('Error at fetch: ', err));
}