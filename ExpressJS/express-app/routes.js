var routes = require('./handlers');
var users = require('./handlers/users');

module.exports = function(app){

  app.get('/test',routes.index);
  app.get('/users',users.list);
}
