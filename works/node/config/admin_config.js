var mongoose = require('mongoose');

mongoose.connect('mongodb://localhost:27017/admin_data',function(err){
    if(err){
        console.log(err);
    }
});

module.exports = mongoose;