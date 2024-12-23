const express = require("express");
const app = express();

const l = console.log ;

app.get('/',(req,res)=>{

    res.status(200).send("hello from the server babe")

})





const port = 3000;
app.listen(port,()=> {
    l(`app is running on port ${port}`);
})