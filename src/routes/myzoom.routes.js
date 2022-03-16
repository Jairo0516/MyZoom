const { Router } = require('express');
Router().get('/', (req, res) => {
	res.redirect('index.html');
});
module.exports = Router;
