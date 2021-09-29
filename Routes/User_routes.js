module.exports = app => {
    const Controller_Users = require("../Controller/User_controller.js");

    app.get('/api',function(req,res){
      res.json({
          status : 'API works',
          message :'Welcome to User API'
      });
  });
  
    // Create a new User
    app.post("/Users",Controller_Users.newcreate);
  
    // Retrieve all Users
    app.get("/Users", Controller_Users.findAll);
  
    // Retrieve a single User with UserId
    app.get("/Users/:UserId", Controller_Users.findOne);
  
    // Update a User with UserId
    app.put("/Users/:UserId", Controller_Users.update);
  
    // Delete a User with UserId
    app.delete("/Users/:UserId", Controller_Users.delete);
  
    // Create a new User
    app.delete("/Users", Controller_Users.deleteAll);
  };