console.log('from promises');

const promise = new Promise((resolve, reject) => {
	// resolve('this is my immediate data');
	reject('something went wrong');
});

promise
	.then(data => {
		return console.log(data);
	})
	.catch(err => console.log(err));

setTimeout(() => {
	promise
		.then(data => {
			return console.log(data);
		})
		.catch(err => console.log(err));
}, 2000);
