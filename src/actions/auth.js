import { firebase, googleProvider } from '../firebase/firebase';

// initializes the login process with google
export const startLogin = () => {
	return () => {
		return firebase.auth().signInWithPopup(googleProvider);
	};
};

export const startLogout = () => {
	return () => {
		return firebase.auth().signOut();
	};
};

export const login = uid => {
	return {
		type: 'LOGIN',
		uid
	};
};

export const logout = () => {
	return {
		type: 'LOGOUT'
	};
};
