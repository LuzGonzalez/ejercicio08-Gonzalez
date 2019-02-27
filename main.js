var mongoose = require('mongoose');
var schema = require ('./schema');

mongoose.connect('mongodb://localhost:27017/test')

//parameters are: model name, schema, collection name
var User = mongoose.model('User2',schema,'user2');

var user = new User ({
    name: 'Luz Gonzalez',
    email:'luzalgonzalezro@ittepic.edu.mx',
    body:'descripcion del libro'
});


user.save(function(error){
    if(error){
        console.log(error);
        process.exit(1);
    }
    console.log("Saved!!");
    process.exit(0);
});
