var express = require('express');
var router = express.Router();
var controller = require('../controllers/article_controller');

router.get('/',controller.articleIndex);

router.get('/list',controller.articleList);

router.get('/add',controller.articleAdd);

router.get('/modify/:_id',controller.articleModify);

router.post('/addArticle',controller.addArticle);

router.post('/modifyArticle',controller.modifyArticle);

router.get('/del/:_id',controller.removeArticle);

module.exports = router;