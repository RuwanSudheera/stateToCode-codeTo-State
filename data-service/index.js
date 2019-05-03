const express = require('express');
const path = require('path');
const fs = require('fs');
const _ = require("underscore");

const app = express();
const port = process.env.PORT || 3001;

app.get('/', (req, res) => res.send('Hello to the data service'));

app.get('/codeToState', (req, res) => {
    fs.readFile('./databases/states_hash.json', (err, data) => {
        if (err) throw err;
        let states = JSON.parse(data);
        res.send(states[req.query.code]);
    });
});

app.get('/stateToCode', (req, res) => {
    fs.readFile('./databases/states_titlecase.json', (err, data) => {
        if (err) throw err;
        let codes = JSON.parse(data);
        res.send(_.where(codes, {name: req.query.state})[0].abbreviation);
    });
});

app.listen(port, () => console.log(`data service app listening on port ${port}!`));
