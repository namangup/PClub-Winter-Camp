const express = require('express');
const app = express();
app.get('/a',(req,res)=>{
    console.log('Called');
    res.send('Hello');
});

app.listen(8000,()=>{
    console.log('server is up');
});