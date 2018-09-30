import { login, logout } from '../../actions/auth';

test('should call login with uid correctly', () => {
	const uid = 'hatlrnvalkj';
	const action = login(uid);
	expect(action).toEqual({
		type: 'LOGIN',
		uid
	});
});

test('should call login with uid correctly', () => {
	const action = logout();
	expect(action).toEqual({
		type: 'LOGOUT'
	});
});
