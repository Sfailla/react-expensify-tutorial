import {
	createStore,
	combineReducers
} from 'redux';
import expensesReducer from '../reducers/expenses';
import filtersReducer from '../reducers/filters';
import {
	reduxDT
} from '../reduxDT/reduxDevtool';

export default () => {
	const store = createStore(
		combineReducers({
			expenses: expensesReducer,
			filters: filtersReducer
		}),
		reduxDT()
	);
	return store;
};