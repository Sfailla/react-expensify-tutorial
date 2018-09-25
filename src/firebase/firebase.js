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

database
	.ref('isSingle')
	.remove()
	.then(() => console.log('doc removed'))
	.catch(err => console.log('there was an error ', err));

database
	.ref()
	.set({
		name: 'Steve Failla',
		age: 35,
		isSingle: false,
		location: {
			state: 'New York',
			country: 'USA'
		}
	})
	.then(() => console.log('data saved'))
	.catch(err => console.log('firebase failed ', err));

database
	.ref('attributes')
	.set({
		height: '5ft',
		weight: '170lbs'
	})
	.then(() => console.log('attributes data saved'))
	.catch(err => console.log('firebase failed ', err));

database.ref().update({
	name: 'Mike',
	age: '45',
	job: 'Software Developer'
});
