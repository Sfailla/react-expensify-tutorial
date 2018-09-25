const express = require('express');
const bodyParser = require('body-parser');
const helmet = require('helmet');
const path = require('path');
const publicPath = path.join(__dirname, '../public');

const app = express();

app.use(helmet());
app.use(bodyParser.json());
app.use(
	bodyParser.urlencoded({
		extended: true
	})
);

app.use(express.static(publicPath));

app.get('*', (req, res) => {
	res.sendFile(path.join(publicPath, '/index.html'));
});

let port = 3000 || process.env.NODE_ENV;

app.listen(port, () => {
	console.log(`express server running on ${port}`);
});
