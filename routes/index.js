var express = require('express');
var router = express.Router();
var todosCtrl = require('../controllers/todos');

/* GET users listing. */
router.get('/', todosCtrl.index);
router.post('/', todosCtrl.create);

module.exports = router;
