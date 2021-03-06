export function signOut() {
	sessionStorage.setItem('accessToken', '-1');
	sessionStorage.setItem('userId', '-1');
	sessionStorage.setItem('role', "");
	window.location.replace("/");
}

export function getAdminLogInUrl() {
	return process.env.REACT_APP_AUTH_SERVER_URL + '/admins/logIn';
}

export function getOwnerLogInUrl() {
	return process.env.REACT_APP_AUTH_SERVER_URL + '/owners/logIn';
}

export async function validateAdminAccessToken() {
	const accessToken = sessionStorage.getItem('accessToken');
	if (accessToken === '-1') {
		return false;
	}
	const requestOptions = {
		method: 'POST',
		headers: { 'Content-Type': 'application/json' },
		body: JSON.stringify({ accessToken })
	};
	const res = await fetch(process.env.REACT_APP_AUTH_SERVER_URL + '/admins/validateAccessToken', requestOptions);
	return res.status === 200;
}

export async function validateOwnerAccessToken() {
	const accessToken = sessionStorage.getItem('accessToken');
	if (accessToken === '-1') {
		return false;
	}
	const requestOptions = {
		method: 'POST',
		headers: { 'Content-Type': 'application/json' },
		body: JSON.stringify({ accessToken })
	};
	const res = await fetch(process.env.REACT_APP_AUTH_SERVER_URL + '/owners/validateAccessToken', requestOptions);
	return res.status === 200;
} 