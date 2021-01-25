let mongoose = require('mongoose');

let personSchema = new mongoose.Schema({
    Name: {
        type: String,
        require:true
    },
    Age : {
        type : Number
    },
    FavFood : [String] 
    
})

module.exports = mongoose.model("person",personSchema)