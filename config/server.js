var express = require('express');
var consign = require('consign');
var path = require('path');

var app = express();
var bodyParser = require('body-parser')
app.use(bodyParser.urlencoded({extended: true}));

app.use(express.static(path.join(__dirname, '../app/public')));
app.set('view engine', 'html');
app.engine('html', require('ejs').renderFile);
app.set('views', './app/public/views');

consign()
    .include('app/routes')
    .then('config/dbConnection.js')
    .then('app/models')
    .into(app);

module.exports = app;