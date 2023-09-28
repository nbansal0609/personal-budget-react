// Budget API

const express = require('express');
// const cors = require('cors');
const app = express();
const port = 4000;
const fs = require('fs');

// app.use(cors());
app.use('/', express.static('public'));

app.get('/hello', (req, res) => {
    res.send('Hello world!');
});


app.get('/budget', (req, res) => {
    fs.readFile('data.json', 'utf8', (err, data) => {
        if (err) {
            res.status(500).send('Error reading the file');
        } else {
            res.json(JSON.parse(data));
        }
    });
});

app.listen(port, () => {
    console.log(`API served at http://localhost:${port}`);
});