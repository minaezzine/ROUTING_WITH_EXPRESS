const express= require("express");
const app= express(); 

const PORT="8007"
app.listen(PORT,err=>{
    if(err) console.log(err);
    console.log("listening to port "+PORT);

})
app.get("/users",(req,res)=>{
    res.status(200).send("welcome");
});

