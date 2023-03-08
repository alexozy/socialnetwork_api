// require dependencies

const express = require('express');
const mongoose = require('mongoose');

const app = express();
const PORT = process.env.PORT || 3001;


// express middleware
app.use(express.json());
app.use(express.urlencoded({extended: true}));
app.use(express.static('public'));

app.use(require('./routes'));

app.listen(PORT, () => console.log (`Listening on ${PORT}`));