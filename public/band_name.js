import express from 'express';
import { dirname } from 'path';
import { fileURLToPath } from 'url';
import bodyParser from 'body-parser';
import morgan from 'morgan';
import { BADNAME } from 'dns';
const __dirname = dirname(fileURLToPath(import.meta.url));
const app = express();
// app.use(morgan("tiny"));
var bandname = "";

app.use(bodyParser.urlencoded({
    extended: true,
}));
function cm(req,res,next) {
    console.log(req.body);
    bandname=req.body["Streetname"]+req.body["petname"];
    next();
}
app.use(cm);
app.get('/', (req, res) => {
    res.sendFile(__dirname + '/index.html');
    //console.log(req.body);
});
app.post('/submit', (req, res) => {
    if(bandname == 'ab')
    res.sendFile(__dirname+'/result.html');
    else
    res.sendFile(__dirname+'/incorrect_password.html')
});
app.listen(3000, () => {
    console.log('listening on port 3000');
});