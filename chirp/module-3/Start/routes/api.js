var express = require("express");
var router = express.Router();

function isAuthenticated (req, res, next) {
    // if user is authenticated in the session, call the next() to call the next request handler 
    // Passport adds this method to request object. A middleware is allowed to add properties to
    // request and response objects

    //allow all get request methods
    if(req.method === "GET"){
        return next();
    }
    if (req.isAuthenticated()){
        return next();
    }

    // if the user is not authenticated then redirect him to the login page
    return res.redirect('/#login');
};

//Register the authentication middleware
router.use(isAuthenticated);

router.route('/posts')

      .get(function(req,res){
        //temporary solution
        res.send({message:'TODO return all posts'});
      })

      .post(function(req,res){

        //temporary solution
        res.send({message : 'TODO Create a new Post'});
      });

router.route('/posts/:id')
      //returns a particular post
      .get(function(req,res){
        res.send({message : 'TODO return a post with ID ' + req.params.id});
      })

       // updates existing post
      .put(function(req,res){
          res.send({message : 'TODO modify a post with ID ' + req.params.id});
      })

      // deletes existing post
     .delete(function(req,res){
         res.send({message : 'TODO delete a post with ID ' + req.params.id});
     });

module.exports = router;
