
const express = require("express");
const app = express();
const fs = require("fs");

const l = console.log ;
app.use(express.json());




const tours = JSON.parse(fs.readFileSync("./dev-data/data/tours-simple.json","utf-8"));

app.get('/',(req,res)=>{

//res.status(200).send("hello from the server babe")
res.status(200).json({message : "hello from the server babe"}) ;


})
app.post('/',(req,res)=>{

    res.status(200).send("hello from the server babe")

})

//to get all tours
app.get('/api/v1/tours',(req,res)=>{
    res.status(200).json({
        status : "success",
        message : {
            tours : tours
        }
})
})

//get one tour
app.get('/api/v1/tours/:id',(req,res)=>{
   let id = req.params.id * 1;
   l(id);
    const tour = tours.find(el => el.id === id)
    res.status(200).json({
        status : "success",
        data : {
            tours : tour
        }
})
})



//adding new tour
app.post('/api/v1/tours',(req,res)=>{
    
    l(req.body);
    res.send('DONE');
    /* res.status(200).json({
        status : "success",
        message : {
            tours : tours[req.id]
            tours : tours[tours.length-1].id
        } })*/



})




const port = 3000;
app.listen(port,()=> {
    l(`app is running on port ${port}`);
})