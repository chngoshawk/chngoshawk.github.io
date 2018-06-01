var listModel = require('../models/listModel');
var articleModel = require('../models/articleModel');
var imgUpload = require('../config/imgUpload_config');
var fs = require('fs');

function Controller() {
    this.articleIndex = function (req, res) {
        if (!req.session.user) {
            res.redirect('/admin/login');
            return;
        }
        res.render('./article/index');
    }

    this.articleList = function (req, res) {
        if (!req.session.user) {
            res.redirect('/admin/login');
            return;
        }
        var pageSize = 3;
        articleModel.find().count().exec(function (error, num) {
            if (error) {
                console.log(error);
            } else {
                var pages = Math.ceil(num / pageSize);
                var page = req.query.page ? req.query.page : 1;
                if (page < 1) page = 1;
                if (page > pages) page = pages;
                var offset = pageSize * (page - 1);
                if (offset < 0) offset = 0;
                articleModel.find().limit(pageSize).skip(offset).exec(function (err, data) {
                    if (err) {
                        console.log(err);
                    } else {
                        var len = data.length;
                        if (len < 1) {
                            res.render('./article/list', { dataList: data });
                        }
                        getName(0);
                        function getName(i) {
                            listModel.findOne(data[i].adminId, function (error, data1) {
                                if (error) {
                                    console.log(error);
                                } else {
                                    data[i].listname = data1.listname;
                                    if (i < len - 1) {
                                        getName(++i);
                                    } else {
                                        res.render('./article/list', { dataList: data, page: page, pages: pages });
                                    }
                                }
                            });
                        }
                    }
                });
            }
        });

    }

    this.articleAdd = function (req, res) {
        if (!req.session.user) {
            res.redirect('/admin/login');
            return;
        }
        listModel.find().exec(function (err, data) {
            if (err) {
                console.log(err);
            } else {
                res.render('./article/add', { dataList: data });
            }
        });
    }

    this.addArticle = function (req, res) {
        var imgPath = 'uploadImgs';
        var imgType = ['image/jpeg', 'image/png', 'image/gif'];
        var fileSize = 1024 * 1024 * 5;

        var upload = imgUpload(imgPath, imgType, fileSize).single('imgUrl');
        upload(req, res, function (err) {
            if (err) {
                console.log(err);
            } else {
                req.body.imgUrl = req.file.filename;
                req.body.ctime = new Date();
                articleModel.create(req.body, function (error) {
                    if (error) {
                        console.log(error);
                    } else {
                        res.redirect('./list');
                    }
                });
            }
        });
    }

    this.articleModify = function (req, res) {
        if (!req.session.user) {
            res.redirect('/admin/login');
            return;
        }
        articleModel.findOne({ _id: req.params._id }, function (err, data) {
            if (err) {
                console.log(err);
            } else {
                listModel.find().count().exec(function (error, num) {
                    if (error) {
                        console.log(error);
                    } else {
                        var len = num;
                        listModel.find({}, function (error, data1) {
                            if (error) {
                                console.log(error);
                            } else {
                                for (var i = 0; i < len; i++) {
                                    data1[i].modifyId = data.adminId;
                                }
                                res.render('./article/modify', { data: data, data1: data1 });
                            }
                        });
                    }
                });
            }
        });
    }

    this.modifyArticle = function (req, res) {
        var where = req.body._id;
        articleModel.update({ _id: where }, req.body, function (err) {
            if (err) {
                console.log(err);
            } else {
                res.redirect('./list');
            }
        });
    }

    this.removeArticle = function (req, res) {
        articleModel.findOne({ _id: req.params._id }, function (err, data) {
            if (err) {
                console.log(err);
            } else {
                var articleImg = data.imgUrl;
                fs.unlink('./uploadImgs/' + articleImg, function (err1) {
                    if (err1) {
                        console.log(err1);
                    } else {
                        articleModel.remove({ _id: req.params._id }, function (err2) {
                            if (err2) {
                                console.log(err2);
                            } else {
                                res.redirect('/article/list');
                            }
                        });
                    }
                });
            }
        });
    }
}

var controller = new Controller;

module.exports = controller;