import express from 'express';
import { dirname } from 'path';
import { fileURLToPath } from 'url';
const app = express();
const port=3000;

// app.use(custom);
app.get('/', (req, res) => {
    console.log('The request is processed');
    res.send("req.body");
});
app.listen(port, (req, res) => {
    console.log('App listening on port ' + port);
});