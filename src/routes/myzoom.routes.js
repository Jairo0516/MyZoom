const { Router } = require('express');
const router = Router();


//Comentario
//Comentario
router.get('/', (req, res) => {
	res.redirect('index.html');
});
module.exports = router;
