const { Router } = require('express');
// const router = Router();

Router().get('/', (req, res) => {
	res.redirect('index.html');
});

module.exports = Router;
