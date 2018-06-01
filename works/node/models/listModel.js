var mongoose = require('../config/admin_config');

var listSchema = new mongoose.Schema({
    order:Number,
    listname:String,
    intro:String,
    modifyId:String,
    articles: Array,
});

var listModel = mongoose.model('list',listSchema);

module.exports = listModel;