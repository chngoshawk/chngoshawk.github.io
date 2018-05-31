var mongoose = require('../config/admin_config');

var articleSchema = new mongoose.Schema({
    adminId:{
        type: 'ObjectId',
        ref:'list'
    },
    title: String,
    author: String,
    keywords: String,
    intros: String,
    ctime:{
        type: Date,
        default: new Date()
    },
    imgUrl:String,
    content: String
});

var articleModel = mongoose.model('article',articleSchema);

module.exports = articleModel;