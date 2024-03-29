// Include the Node HTTP Library
var http = require('http');
// Include the Express Module
var express = require('express');
// express namespace must be loaded before the app is instantiated
var namespace = require('express-namespace');
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

app.get('/json',function(req,res){
  res.json({message:'welcome'});
});

app.namespace('/articles',function(){

   app.get('/',function(req,res){
      res.send('index of articles');
    });

   app.get('/new',function(req,res){
     res.send('new article');
   });

   app.get('/edit/:id',function(req,res){

     res.send('edit article ' + req.params.id );
   });

   app.get('/delete/:id',function(req,res){
     res.send('delete article ' + req.params.id);
   });
   app.get('/2013',function(req,res){
     res.send("articles from 2013");
   });


   // Namespaces can be nested
  app.namespace('/2013/jan',function(){

    app.get('/',function(req,res){
      res.send('articles from jan 2013');
    });

    app.get('/nodejs',function(req,res){
      res.send('articles about Node from jan 2013');
    });
  });


});

app.get('/file',function(req,res){
   res.sendfile('./secret-logo.png',function(err){
      if(err){
        console.log(err);
      }
      else{
        console.log('file sent');
      }
   });
});

app.get('/download',function(req,res){
  res.download('./secret-logo.png','open-secret.png',function(err){
    if(err){
      console.log(err);
    }
    else{
      console.log('file downloaded');
    }
  });
});

// A route for the home page - will render a view
app.get('/',function(req,res){
   // call an undefined function to generate an error
    fail();
    // Pass two config variables to the view
   //res.render('index',{title:config.title,message:config.message});
});
/*
app.get('/user/:id',function(req,res){

    res.send("user id: " + req.params.id);
});
app.get('/ab*cd',function(req,res){
  res.send('ab*cd');
});

// A route for /say-hello  - will render a view
app.get('/say-hello',function(req,res){
  res.render('hello');
});

var routes = require('./routes')(app);
*/
//Start the app
http.createServer(app).listen(config.port,function(){

  console.log('App started on port ' + config.port);
});
