var http = require('http');
var express = require('express');
var path = require('path');
var favicon = require('serve-favicon');
var logger = require('morgan');
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');

var routes = require('./routes/index');
var users = require('./routes/users');

var app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'jade');

// uncomment after placing your favicon in /public
//app.use(favicon(path.join(__dirname, 'public', 'favicon.ico')));
app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser('S3CRE7'));
app.use(cookieSession());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', routes)
app.use('/users', users);

app.get('/',function(req,res){
  res.send('welcome');
});
app.get('/search',function(req,res){

   res.render('search',{title:'Search'});
});

app.get('/search-result',function(req,res){

  /*
   var name = req.query.name;
   var source = req.query.source;
   console.log('Searching for: ' + name);
   console.log('From: ' + source);
   res.send(name + ' : ' + source);
   */
   var q = req.query.q;
   var l = req.query.l;
   var e = req.query.e;
   console.log('Query: ' + q);
   console.log('Experience: ' + e);
   console.log('Location: ' + l);
   res.json(req.query);
});


app.get('/multi',function(req,res){
  res.render('skills',{title:'Multiple Options'})
});


app.get('/skills-search-result',function(req,res){
  var skills = req.query.skills;
  //console.log(skills);
  console.log('Skills: ')
  skills.forEach(function(skill,i){
    console.log((i+1) + '.' + skill);
    res.json(skills);
  });
});

app.get('/signup',function(req,res){
  res.render('signup',{title:'Sign Up'});
});

app.post('/signup',function(req,res){
  var name = req.body.name;
  var email = req.body.email;
  console.log('Name: ' + name);
  console.log('Email: ' + email);
  console.log(req.files);
  //res.json(req.body);
  res.json(req.files);
});
app.get('/counter',function(req,res){

   var count = req.cookies.count || 0;
   count++;
   res.cookie('count',count);
   res.send('Count: ' + count);

});
// catch 404 and forward to error handler
app.use(function(req, res, next) {
  var err = new Error('Not Found');
  err.status = 404;
  next(err);
});

// error handlers

// development error handler
// will print stacktrace
if (app.get('env') === 'development') {
  app.use(function(err, req, res, next) {
    res.status(err.status || 500);
    res.render('error', {
      message: err.message,
      error: err
    });
  });
}



// production error handler
// no stacktraces leaked to user
app.use(function(err, req, res, next) {
  res.status(err.status || 500);
  res.render('error', {
    message: err.message,
    error: {}
  });
});

http.createServer(app).listen(3000,function(){

  console.log('App started on port ' + 3000);
});
module.exports = app;
