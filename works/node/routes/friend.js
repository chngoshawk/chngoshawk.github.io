var express = require('express');
var router = express.Router();
var controller = require('../controllers/friend_controller');

router.get('/',controller.friendList);

router.get('/list',controller.friendList);

router.get('/add',controller.friendAdd);

router.post('/addFriend',controller.addFriend);

router.post('/friendModified',controller.friendModified);

router.get('/modify/:_id',controller.friendModify);

router.get('/del/:_id',controller.friendDel);

module.exports = router;