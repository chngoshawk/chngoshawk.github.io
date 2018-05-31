var express = require('express');
var router = express.Router();
var controller = require('../controllers/list_controller');

router.get('/reg',controller.userReg);

router.post('/userAdd',controller.userAdd);

router.get('/login',controller.login);

router.post('/userlogin',controller.userlogin);

router.get('/logout',controller.logout);

router.get('/code',controller.code);

router.get('/',controller.adminIndex);

router.get('/list',controller.adminList);

router.get('/add',controller.adminAdd);

router.get('/modify/:_id',controller.adminModify);

router.post('/addList',controller.adminAddList);

router.post('/modified',controller.adminModified);

router.get('/del/:_id',controller.adminDel);

module.exports = router;