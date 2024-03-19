import express from 'express';
const app = express();
const port=3000;
const day=new Date().getSeconds();
let ans="";

app.get("/", (req, res) =>{
    const data={
        seconds: new Date().getSeconds(),
        title:"Ejs tags",
        items:["apple", "banana", "cat"],
        htmlcode:"<em>hello i am coming from the index.js</em>"
    };
res.render("index.ejs",data)
});
app.listen(port,() => {
    console.log('listening on port'+port);
    
});