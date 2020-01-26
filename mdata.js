//create package
var mongoose = require('mongoose');
//create connection
mongoose.connect('mongodb://localhost/employee', {useNewUrlParser: true});
//connection object 
var conn=mongoose.connection;
//create schema
var employeeSchema = new mongoose.Schema({
name: String,
email:String,
etype:String,
hourlyrate:Number,  
totalHour:Number,
total:Number,
});
    employeeSchema.methods.totalSalary=function(){
        return this.hourlyrate* this.totalHour;
    }
//create model 
var employeeModel = mongoose.model('employee',employeeSchema);
var employees = new employeeModel({name:'pratik',
email:'pratikbhosale482@gmail.com',
etype:'hourly',
hourlyrate:10,
totalhour:12,
});
console.log(employees);
/*employees.total = employees.totalSalary();    
//connection connect or disconnect
conn.on("connected",function(){
    console.log("connected successfully");
});

conn.on("disconnected",function(){
    console.log("disconnected successfully");
});
//connection error query run time
conn.on('error', console.error.bind(console, 'connection error:'));
//database insert code
conn.once('open',function(){
employees.collection.insertOne(function(err,res){
if(err){
        var error ='something bad happened try again';
}
console.log(res);
conn.close();
});     
});*/

