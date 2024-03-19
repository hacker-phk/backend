import express from 'express';
import bodyParser from 'body-parser';
const app = express();
app.use(bodyParser.urlencoded({
    extended: true,
}));
app.get('/', (req, res) =>{ 
    res.render("countletters.ejs");
});
app.post('/submit',(req, res) =>{
    const name=req.body.FirstName+req.body.LastName;
    res.render("countletters.ejs", {name:name});
});

app.listen(3000, () => {
    console.log('listening on port 3000');
});