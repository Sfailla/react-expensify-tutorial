import firebase from 'firebase/app';
import 'firebase/database';

const config = {
	apiKey: 'AIzaSyAG_X0dwWUHTl8BVkMEq1o-kbjHkk0XehA',
	authDomain: 'expensify-2238.firebaseapp.com',
	databaseURL: 'https://expensify-2238.firebaseio.com',
	projectId: 'expensify-2238',
	storageBucket: 'expensify-2238.appspot.com',
	messagingSenderId: '751216899471'
};

firebase.initializeApp(config);

const database = firebase.database();

database.ref().set({
	name: 'Steve Failla',
	age: 35,
	isSingle: false,
	location: {
		state: 'New York',
		country: 'USA'
	}
});

// database.ref().set('this is my info');

database.ref('age').set(27);
