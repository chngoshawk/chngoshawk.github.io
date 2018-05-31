var listModel = require('../models/listModel');
var articleModel = require('../models/articleModel');
var friendModel = require('../models/friendModel');

function Controller() {

    this.index = function (req, res) {
        listModel.find().exec(function (err, data) {
            if (err) {
                console.log(err);
            } else {
                friendModel.find({}, function (err1, data1) {
                    if (err1) {
                        console.log(err1);
                    } else {
                        var dataList = {};
                        dataList.articles = [];
                        res.render('index', { list: data, dataList: dataList, friendData: data1 });
                    }
                });
            }
        });
    }

    this.indexItem = function (req, res) {
        listModel.find({}, function (err, datalist) {
            if (err) {
                console.log(err);
            } else {
                listModel.findOne({ _id: req.params._id }, function (err1, data) {
                    if (err1) {
                        console.log(err1);
                    } else {
                        articleModel.find({ adminId: data._id }, function (error, data1) {
                            if (error) {
                                console.log(error);
                            } else {
                                friendModel.find({}, function (err2, data2) {
                                    if (err2) {
                                        console.log(err2);
                                    } else {
                                        data.articles = data1;
                                        res.render('index', { list: datalist, dataList: data, friendData: data2 });
                                    }
                                });
                            }
                        });
                    }
                });
            }
        });
    }

    this.detail = function (req, res) {
        listModel.find({}, function (err, datalist) {
            if (err) {
                console.log(err);
            } else {
                articleModel.findOne({ _id: req.params._id }, function (error, data1) {
                    if (error) {
                        console.log(error);
                    } else {
                        friendModel.find({}, function (err2, data2) {
                            if (err2) {
                                console.log(err2);
                            } else {
                                res.render('detail', { list: datalist, dataList: data1, friendData: data2 });
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