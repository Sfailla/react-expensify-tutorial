import { createStore } from 'redux';

// REDUCERS

const incrementCount = ({ incrementBy = 1 } = {}) => ({
	type: 'INCREMENT',
	incrementBy
});

const decrementCount = ({ decrementBy = 1 } = {}) => ({
	type: 'DECREMENT',
	decrementBy
});

const setCount = ({ count }) => ({
	type: 'SET',
	count
});

const resetCount = () => ({
	type: 'RESET'
});

// STATE and ACTIONS

const countReducer = (state = { count: 0 }, action) => {
	switch (action.type) {
		case 'INCREMENT':
			return {
				count: state.count + action.incrementBy
			};
		case 'DECREMENT':
			return {
				count: state.count - action.decrementBy
			};
		case 'SET':
			return {
				count: action.count
			};
		case 'RESET':
			return {
				count: 0
			};
		default:
			return state;
	}
};

const store = createStore(countReducer);

const unsubscribe = store.subscribe(() => {
	console.log(store.getState());
});

// unsubscribe();

store.dispatch({ type: 'INCREMENT', incrementBy: 250 });
store.dispatch({ type: 'DECREMENT', decrementBy: 2 });

store.dispatch({ type: 'SET', count: 500 });
store.dispatch({ type: 'RESET' });

store.dispatch(incrementCount());
store.dispatch(decrementCount());

store.dispatch(setCount({ count: 100 }));
store.dispatch(resetCount());
