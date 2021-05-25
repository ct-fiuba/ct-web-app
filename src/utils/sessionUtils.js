export function signOut() {
	sessionStorage.setItem('accessToken', '-1');
	sessionStorage.setItem('userId', '-1');
	sessionStorage.setItem('role', "");
	window.location.replace("/");
}