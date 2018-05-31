var friendModel = require('../models/friendModel');
var imgUpload = require('../config/imgUpload_config');
var fs = require('fs');

function Controller() {

    this.friendList = function (req, res) {
        if (!req.session.user) {
            res.redirect('/admin/login');
            return;
        }
        var pageSize = 3;
        friendModel.find().count().exec(function (err, data) {
            if (err) {
                console.log(err);
            } else {
                var pages = Math.ceil(data / pageSize);
                var page = req.query.page ? req.query.page : 1;
                if (page < 1) page = 1;
                if (page > pages) page = pages;
                var offset = pageSize * (page - 1);
                if (offset < 0) offset = 0;
                friendModel.find().limit(pageSize).skip(offset).sort({ order: 1 }).exec(function (err, data) {
                    if (err) {
                        console.log(err);
                    } else {
                        res.render('./friend/list', { dataList: data, pages: pages, page: page });
                    }
                });
            }
        });
    }

    this.friendAdd = function (req, res) {
        if (!req.session.user) {
            res.redirect('/admin/login');
            return;
        }
        res.render('./friend/add');
    }

    this.addFriend = function (req, res) {
        var imgPath = 'uploadImgs';
        var imgType = ['image/jpeg', 'image/png'];
        var fileSize = 1024 * 1024 * 3;

        var upload = imgUpload(imgPath, imgType, fileSize).single('friendImg');
        upload(req, res, function (err) {
            if (err) {
                console.log(err);
            } else {
                req.body.friendImg = req.file.filename;
                console.log(req.body);
                friendModel.create(req.body, function (error) {
                    if (error) {
                        console.log(error);
                    } else {
                        res.redirect('/friend/list');
                    }
                });
            }
        });
    }

    this.friendModify = function (req, res) {
        friendModel.findOne({ _id: req.params._id }, function (err, data) {
            if (err) {
                console.log(err);
            } else {
                res.render('./friend/modify', { dataList: data });
            }
        });
    }

    this.friendModified = function (req, res) {
        friendModel.update({ _id: req.body._id }, req.body, function (err) {
            if (err) {
                console.log(err);
            } else {
                res.redirect('/friend/list');
            }
        });
    }

    this.friendDel = function (req, res) {
        friendModel.findOne({ _id: req.params._id }, function (err, data) {
            if (err) {
                console.log(err);
            } else {
                var friendImg = data.friendImg;
                fs.unlink('./uploadImgs/' + friendImg, function (err1) {
                    if (err1) {
                        console.log(err1);
                    } else {
                        friendModel.remove({_id:req.params._id}, function (err2) {
                            if (err2) {
                                console.log(err2);
                            } else {
                                res.redirect('/friend/list');
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