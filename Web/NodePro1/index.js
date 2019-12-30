const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const Student = require('./models/student.js');
const DB_URL = "mongodb://localhost:27017/PClub";
const mongoose = require('mongoose');


app.use(bodyParser.urlencoded({
    extended: true
  }));

app.use(bodyParser.json());

app.get('/a',(req,res)=>{
    res.send('Hello Kitty');
});

app.post('/a',(req,res)=>{
    //console.log(req);
   // console.log(res);
    console.log('Called');
    console.log(req.body);
    res.send({
        a:1,
        b:2
    });
});

app.post('/new',async (req,res)=>{
    const {name,rollNo}=req.body;
    const student = new Student({
        name:name,
        rollNo:rollNo
    });
    await student.save();
    console.log(student);
    res.send('created new');
});

app.listen(8000,()=>{
    console.log('server is up');
});

mongoose.connect(DB_URL).then(()=>{
    console.log('connected to db');
});
/*
(req,res,next)=>{
    const status = verifyToken(req.co...);
    if(status===true)
    else res.status(400).send('Invalid Token')
}
userInfo
req.user=userInfo
next();
*/