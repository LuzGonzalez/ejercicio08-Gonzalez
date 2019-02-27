var moongose = require('mongoose');

module.exports = new moongose.Schema({
    name:{
        type: String,
        required:true
    },

    email:{
        type:String,
        required:true,
        match:/.+@.+\..+/,
        lowercase:true
    },
    
    loggedInCount:{
        type:Number,
        default:0
    }
});