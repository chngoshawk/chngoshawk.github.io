var listModel = require('../models/listModel');
var userModel = require('../models/users');
var md5 = require('md5');

function Controller() {

    this.userAdd = function (req, res) {
        req.body.password = md5(req.body.password);
        userModel.create(req.body, function (err) {
            if (err) {
                console.log(err);
            } else {
                res.redirect('./login');
            }
        });
    }

    this.login = function (req, res) {
        var tips = {
            yzmErr: '',
            accErr: ''
        }
        res.render('./admin/login', { tips: tips });
    }

    this.code = function (req, res) {
        var captchapng = require('captchapng');
        var code = parseInt(Math.random() * 9000 + 1000);
        req.session.code = code;
        var p = new captchapng(80, 30, code);
        p.color(0, 0, 0, 0);
        p.color(80, 80, 80, 255);
        var img = p.getBase64();
        var imgbase64 = new Buffer(img, 'base64');
        res.send(imgbase64);
    }

    this.userlogin = function (req, res) {
        if (req.body.code != req.session.code) {
            var tips = {
                yzmErr: '验证码错误',
                accErr: ''
            }
            res.render('./admin/login', { tips: tips });
        } else {
            var username = req.body.username.trim();
            var password = md5(req.body.password.trim());
            userModel.findOne({ username: username }, function (err, data) {
                if (!data) {
                    var tips = {
                        yzmErr: '',
                        accErr: '用户名或者密码错误'
                    }
                    res.render('./admin/login', { tips: tips });
                } else {
                    if (password != data.password) {
                        var tips = {
                            yzmErr: '',
                            accErr: '用户名或者密码错误'
                        }
                        res.render('./admin/login', { tips: tips });
                    } else {
                        req.session.user = data;
                        res.redirect('/admin');
                    }
                }
            });
        }
    }

    this.logout = function (req, res) {
        req.session.user = null;
        res.redirect('./login');
    }

    this.adminIndex = function (req, res) {
        if (!req.session.user) {
            res.redirect('/admin/login');
            return;
        }
        res.render('./admin/index');
    }

    this.adminList = function (req, res) {
        if (!req.session.user) {
            res.redirect('/admin/login');
            return;
        }
        var pageSize = 3;
        listModel.find().count().exec(function (err, data) {
            if (err) {
                console.log(err);
            } else {
                var pages = Math.ceil(data / pageSize);
                var page = req.query.page ? req.query.page : 1;
                if (page < 1) page = 1;
                if (page > pages) page = pages;
                var offset = pageSize * (page - 1);
                if (offset < 0) offset = 0;
                listModel.find().limit(pageSize).skip(offset).sort({ order: 1 }).exec(function (err, data) {
                    if (err) {
                        console.log(err);
                    } else {
                        if(data.length < 1){
                            var tips = '数据库没有数据，请你在添加文章之前先添加列表内容';
                        }else{
                            var tips = '';
                        }
                        res.render('./admin/list', { dataList: data, pages: pages, page: page, tips: tips });
                    }
                });
            }
        });
    }

    this.adminAdd = function (req, res) {
        if (!req.session.user) {
            res.redirect('/admin/login');
            return;
        }
        res.render('./admin/add');
    }

    this.adminAddList = function (req, res) {
        listModel.create(req.body, function (err) {
            if (err) {
                console.log(err);
            } else {
                res.redirect('/admin/list');
            }
        });
    }

    this.adminModify = function (req, res) {
        listModel.findOne({ _id: req.params._id }, function (err, data) {
            if (err) {
                console.log(err);
            } else {
                res.render('./admin/modify', { dataList: data });
            }
        });
    }

    this.adminModified = function (req, res) {
        var where = req.body._id;
        delete req.body._id;
        listModel.update({ _id: where }, req.body, function (err) {
            if (err) {
                console.log(err);
            } else {
                res.redirect('/admin/list');
            }
        });
    }

    this.adminDel = function (req, res) {
        listModel.remove({ _id: req.params._id }, function (err) {
            if (err) {
                console.log(err);
            } else {
                res.redirect('/admin/list');
            }
        });
    }

    this.userReg = function (req, res) {
        res.render('./admin/reg');
    }
}

var controller = new Controller();

module.exports = controller;