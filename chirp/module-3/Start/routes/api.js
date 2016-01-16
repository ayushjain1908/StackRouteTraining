var express = require("express");
var router = express.Router();

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
