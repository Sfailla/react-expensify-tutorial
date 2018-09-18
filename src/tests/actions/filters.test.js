import moment from 'moment';
import {
	setStartDate,
	setEndDate,
	sortByDate,
	sortByAmount,
	setTextFilter
} from '../../actions/filters';

test('should generate setStartDate action object', () => {
	const action = setStartDate(moment(0));
	expect(action).toEqual({
		type: 'SET_START_DATE',
		startDate: moment(0)
	});
});

test('should generate setEndDate action object', () => {
	const action = setEndDate(moment(0));
	expect(action).toEqual({
		type: 'SET_END_DATE',
		endDate: moment(0)
	});
});

test('should generate action object for sort by date', () => {
	const sortDate = sortByDate();
	expect(sortDate).toEqual({
		type: 'SORT_BY_DATE'
	});
});

test('should generate set text filter object with default \'\' string ', () => {
	const action = setTextFilter();
	expect(action).toEqual({
		type: 'SET_TEXT_FILTER',
		text: ''
	})
})

test('should generate action object for sort by amount', () => {
	const sortAmount = sortByAmount();
	expect(sortAmount).toEqual({
		type: 'SORT_BY_AMOUNT'
	});
});