var mongoose = require('../config/admin_config');

var userSchema = new mongoose.Schema({
    username: String,
    password: String
});

var userModel = mongoose.model('user',userSchema);

module.exports = userModel;