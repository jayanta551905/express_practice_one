const express=require('express');
const app=new express();

app.get("/", (req,res)=>{
    res.send('Home');
});
app.post("/about", (req,res)=>{
    res.send('About');
});
app.put("/contact", (req,res)=>{
    res.send('Contact');
});
app.delete("/Media", (req,res)=>{
    res.send('Media');
});
app.listen(8000, ()=> {
    console.log('Server run success');
});