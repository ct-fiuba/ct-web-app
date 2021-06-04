export function signOut() {
	sessionStorage.setItem('accessToken', '-1');
	sessionStorage.setItem('userId', '-1');
	sessionStorage.setItem('role', "");
	window.location.replace("/");
}

export function getAdminSignInUrl() {
	return process.env.REACT_APP_AUTH_SERVER_URL + '/admins/signIn';
}

export function getOwnerSignInUrl() {
	return process.env.REACT_APP_AUTH_SERVER_URL + '/owners/signIn';
}

export async function validateAdminAccessToken() {
	const accessToken = sessionStorage.getItem('accessToken');
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
	const requestOptions = {
		method: 'POST',
		headers: { 'Content-Type': 'application/json' },
		body: JSON.stringify({ accessToken })
	};
	const res = await fetch(process.env.REACT_APP_AUTH_SERVER_URL + '/owners/validateAccessToken', requestOptions);
	return res.status === 200;
} 