const mongoose = require('mongoose');
require('dotenv').config({ path: './.env' })
const Person= require('./person')

// connect to DB
mongoose.connect(process.env.MONGO_URI,{ useNewUrlParser: true , useUnifiedTopology: true })
.then(()=> console.log('DB connected'))
.catch(()=> console.log(err))

//Create and Save a Record of a Model
const person= new Person({
    Name:'aymen',
    Age:27,
    FavFood:['mlewi','kafteji','borghel']
})

person.save((err,data)=>{
    err ? console.log(err) : console.log('person saved',data)
})

//Create Many Records with model.create()
Person.create([
    {Name:'mohsen',
    Age:18,
    FavFood:['ojja','frikasee']},
    {Name:'salem',
    Age:12,
    FavFood:['mtabga','makarona']},
    {Name:'sleh',
    Age:47,
    FavFood:['rechta','chmenka']}
])
.then(()=> console.log('many persons added',data))
.catch(()=> console.log(err))

//Use model.find() to Search Your Database
Person.find()
.then(()=> console.log('all person find'))
.catch(()=> console.log(err))

//Use model.findOne() to Return a Single Matching Document from Your Database
Person.findOne({FavFood:'mlewi'})
.then(()=> console.log('person whidh FavFood found'))
.catch(()=> console.log(err))

//Use model.findById() to Search Your Database By _id
var id = '600a987ce77cdd12947ff18f'; 
person.findById(id, function (err, docs) { 
    if (err){ 
        console.log(err); 
    } 
    else{ 
        console.log("Result : ", docs); 
    } 
});

//Perform Classic Updates by Running Find, Edit, then Save
person.findOneAndUpdate({_id:id},FavFood.push('hamburger'))

//Perform New Updates on a Document Using model.findOneAndUpdate()
person.findOneAndUpdate({name:'aymen'},{$set :{age:20}},{new:true})

//Delete One Document Using model.findByIdAndRemove
person.findByIdAndRemove(id)

//MongoDB and Mongoose - Delete Many Documents with model.remove()
person.remove({name:'Mary'},(err,data)=>{
if (err) {
    done(err);
  } else {
    done(null, data);
  }
});

