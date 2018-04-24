var express = require('express');
var router = express.Router();

var userController = require('../controllers/userController')

router.post('/list', userController.list);
router.get('/:id/delete', userController.delete);
router.get('/:id', userController.get);

router.post('/create', userController.create);
router.post('/validate', userController.validate);
router.post('/:id/update', userController.update);

module.exports = router;