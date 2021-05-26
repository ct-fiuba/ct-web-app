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