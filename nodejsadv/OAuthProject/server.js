var express = require('express');
var app = express();
var morgan = require('morgan');
var cookieParser = require('cookie-parser');
var session =  require('express-session');
var mongoose = require('mongoose');
var bodyParser = require('body-parser');
var passport = require('passport');
var flash = require('connect-flash');
var configDB = require('./config/database.js');
mongoose.connect(configDB.url);
app.use(morgan('dev'));
app.use(cookieParser());
app.use(bodyParser.urlencoded({extended: true}));
app.use(session({secret : 'anystringoftext',
                saveUninitialized : true,
                resave : true}));
app.use(passport.initialize());
app.use(passport.session());
app.use(flash());
app.set('view engine','ejs');
/*
app.use('/',function(req,res){
  res.send('Our first express program');
  console.log(req.cookies);
  console.log('*************************');
  console.log(req.session);
}); */

require('./app/routes.js')(app,passport);

app.listen(3000);
console.log("Server running on port 3000");
