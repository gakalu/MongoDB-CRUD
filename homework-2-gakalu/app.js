const express=require('express')
const mongoose=require('mongoose');
const schoolRouter=require('./router')
mongoose.connect('mongodb://localhost:27017/Homework-02',err=>{

if(err){
    console.log("DB connection is failed");
}else{
   console.log("DB is connected sucessfully");
}
})
const app=express();
app.use(express.json());
app.use('./schools',schoolRouter);

app.listen(5000, console.log('5000 port is listing,....'))