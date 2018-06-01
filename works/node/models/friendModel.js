var mongoose = require('../config/admin_config');

var friendSchema = new mongoose.Schema({
    friendname: String,
    friendImg: String,
    friendUrl : String,
});

var friendModel = mongoose.model('friends',friendSchema);

module.exports = friendModel;