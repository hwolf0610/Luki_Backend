const mongoose = require('mongoose');
const Schema = mongoose.Schema;
let LukiUser = new Schema({
    username: {
        type: String
    },
    email: {
        type: String
    },
    password:{
        type:String
    },
    role:{
        type:String
    }
});
module.exports = mongoose.model('LukiUser', LukiUser);