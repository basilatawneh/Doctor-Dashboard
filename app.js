var express = require('express');
var mongoose = require('mongoose');
var app = express();
/*
// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'jade');
*/
var hbs = require('hbs');
app.set('view engine', 'hbs');
app.set('views', __dirname + '/views');
hbs.registerPartials(__dirname + '/views/partials');
app.use(express.static('public'));
// error handler

app.get('/', function(req, res) {
  res.render('login',{
    style: 'style.css'
  });
});
app.listen(3000)
