var express = require('express');
var router = express.Router();
var controller = require('../controllers/index_controller');

/* GET home page. */
router.get('/',controller.index);

router.get('/item/:_id',controller.indexItem);

router.get('/detail/:_id',controller.detail);

module.exports = router;
