var express = require('express');
var app = express();
var morgan = require('morgan');
var cookieParser = require('cookie-parser');
var session =  require('express-session');
var mongoose = require('mongoose');
var bodyParser = require('body-parser');
var configDB = require('./config/database.js');
mongoose.connect(configDB.url);
app.use(morgan('dev'));
app.use(cookieParser());
app.use(bodyParser.urlencoded({extended: true}));
app.use(session({secret : 'anystringoftext',
                saveUninitialized : true,
                resave : true}));

app.set('view engine','ejs');                
/*
app.use('/',function(req,res){
  res.send('Our first express program');
  console.log(req.cookies);
  console.log('*************************');
  console.log(req.session);
}); */

require('./app/routes.js')(app);

app.listen(3000);
console.log("Server running on port 3000");
