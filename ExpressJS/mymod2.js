
var secret = 'zoltan' ;
var name = 'Ayush';
module.exports = {

  name : 'Packt',
  lower : function(input){
    return input.toLowerCase();
  },
  upper : function(input){
    return input.toUpperCase();
  },
  get_name : function(){
    return this.name;
  },
  get_secret : function(){
    return secret;
  }
}
