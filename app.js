
const express = require("express");
const app = express();
const fs = require("fs");

const l = console.log ;


app.use(express.json());


const tours = fs.readFileSync("./dev-data/data/tours-simple.json","utf-8");

app.get('/',(req,res)=>{

//res.status(200).send("hello from the server babe")
res.status(200).json({message : "hello from the server babe"}) ;


})
app.post('/',(req,res)=>{

    res.status(200).send("hello from the server babe")

})

app.get('/api/v1/tours',(req,res)=>{

    l(req.body);
    res.status(200).json({
        status : "success",
        message : {
            tours : tours
        }



})


})









const port = 3000;
app.listen(port,()=> {
    l(`app is running on port ${port}`);
})