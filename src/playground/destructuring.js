console.log('hello from destructuring');

const person = {
	name: 'Steve',
	age: 34,
	location: {
		city: 'Ossining',
		temp: 92
	}
};

const { name, age, location } = person;
const { city, temp } = person.location;

console.log(`${name} is ${age}`);

city && temp ? console.log(`It's ${temp} in ${city}`) : 'sorry no weather in your area :( ';

const book = {
	title: 'Ego is the Enemy',
	author: 'Ryan Holiday',
	publisher: {
		name: 'Penguin',
		location: 'NYC'
	}
};

// Object Destructuring ES6 ES7
const { title, author } = book;
const { name: publishedAuthor = 'Stevo Publishing' } = book.publisher;

console.log(publishedAuthor);

// Array Des
const address = [ '1299 S Juniper Street', 'Philidelphia', 'Pennsylvania', '19147' ];

const [ , city, state = 'New York', , ] = address;

console.log(`you are in ${city}, ${state}`);
