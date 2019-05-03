const express = require('express');
const path = require('path');
const http = require('http');

const app = express();
const port = process.env.PORT || 3002;

app.get('/', (req, res) => res.send('Hello to the data service'));

app.get('/codeToState', (req, res) => {
    fs.readFile('./databases/states_hash.json', (err, data) => {
        if (err) throw err;
        let states = JSON.parse(data);
    });
});

app.get('/stateToCode', (req, res) => {
    fs.readFile('./databases/states_titlecase.json', (err, data) => {
        if (err) throw err;
        let codes = JSON.parse(data);
    });
});

app.listen(port, () => console.log(`data service app listening on port ${port}!`));
