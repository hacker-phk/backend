import express from 'express';
import { dirname } from 'path';
import { fileURLToPath } from 'url';
import bodyParser from 'body-parser';
import morgan from 'morgan';
//learned the bodyParser morgan middlewares
//morgan is used to log the request and response
//bodyParser is used to preprocess the request and response
//we can use the bodyParser to access the body atributes
const __dirname = dirname(fileURLToPath(import.meta.url));
const app = express();
app.use(morgan("tiny"));
app.use(bodyParser.urlencoded({
    extended: true,
}));
app.get('/', (req, res) => {
    res.sendFile(__dirname + '/index.html');
    //console.log(req.body);
});
app.post('/submit',(req, res) => {
    console.log(req.body);
    res.send(200);
});
app.listen(3000, () => {
    console.log('listening on port 3000');
});
