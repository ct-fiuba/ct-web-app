export async function simulate(config, rules) {
	const requestOptions = {
		method: 'POST',
		headers: { 'Content-Type': 'application/json' },
		body: JSON.stringify({
			...config,
			rules
		})
	};
	return fetch(process.env.REACT_APP_SIMULATOR_URL + '/simulation', requestOptions)
		.then(response => response.json())
		.catch(err => ({error: "Problem with simulation"}));
}