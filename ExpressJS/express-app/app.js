// Include the Node HTTP Library
var http = require('http');
// Include the Express Module
var express = require('express');
// Create an instance of Express
var app = new express();
// Load the iniparser Module
var iniparser = require('iniparser');
// Read the ini file and populate the content on the config object
var config = iniparser.parseSync('./config.ini');
var fs = require('fs');
// Set the view engine
app.set('view engine','jade');
// where to find the view files
app.set('views','./views');
// Mark the public dir as a static dir
app.use(express.static('./public'));
// Add the responseTime middleware
app.use(express.responseTime());
// Explicitly add the router middleware
app.use(app.router);
// Add the errorHandler middleware
app.use(express.errorHandler());
// Add the logger Module
app.use(express.logger({
  format :'tiny',
  stream : fs.createWriteStream('app.log',{'flags':'w'})
}));
// A route for the home page - will render a view
app.get('/',function(req,res){
   // call an undefined function to generate an error
    //fail();
    // Pass two config variables to the view
   res.render('index',{title:config.title,message:config.message});
});
/*
// A route for /say-hello  - will render a view
app.get('/say-hello',function(req,res){
  res.render('hello');
});

app.get('/test',function(req,res){
  res.send('this is a test');
});
*/
//Start the app
http.createServer(app).listen(config.port,function(){

  console.log('App started on port ' + config.port);
});
