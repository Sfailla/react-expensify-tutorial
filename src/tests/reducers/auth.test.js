import authReducer from '../../reducers/auth';

test('should set the default state of the reducer', () => {
	const state = authReducer({}, { type: '@@INIT' });
	expect(state).toEqual({});
});

test('should set uid for login', () => {
	const uid = 'fhajdhfafj';
	const action = {
		type: 'LOGIN',
		uid
	};
	const state = authReducer({}, action);
	expect(state.uid).toBe(action.uid);
});

test('should remove uid for login', () => {
	const uid = 'fhajdhfafj';
	const action = { type: 'LOGOUT' };
	const state = authReducer({ uid }, action);
	expect(state).toEqual({});
});
