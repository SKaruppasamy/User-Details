const Model_User = require("../Model/User_model.js");

// Create and Save a new User
exports.newcreate = (req, res) => {
    console.log('23576387676554');
  // Validate request
  if (!req.body) {
    res.status(400).send({
      message: "Content can not be empty!"
    });
  }
console.log('1111111111');
  // Create a User
  const Users= new Model_User({
    Name :req.body.Name,
    DateofBirth :req.body.DateofBirth,
    Age :req.body.Age, 
    EMail: req.body.EMail,
    MobileNo: req.body.MobileNo
  });
console.log('2222222222');
  // Save User in the database
  Model_User.create(Users, (err, data) => {
    if (err)
      res.status(500).send({
        message:
          err.message || "Some error occurred while creating the User."
      });
    else res.send(data);
  });
  console.log('3333333333');
};

// Retrieve all Users from the database.
exports.findAll = (req, res) => {
  Model_User.getAll((err, data) => {
    if (err)
      res.status(500).send({
        message:
          err.message || "Some error occurred while retrieving Users."
      });
    else res.send(data);
  });
};

// Find a single User with a UserId
exports.findOne = (req, res) => {
  Model_User.findById(req.params.UserId, (err, data) => {
    if (err) {
      if (err.kind === "not_found") {
        res.status(404).send({
          message: `Not found User with id ${req.params.UserId}.`
        });
      } else {
        res.status(500).send({
          message: "Error retrieving User with id " + req.params.UserId
        });
      }
    } else res.send(data);
  });
};

// Update a User identified by the UserId in the request
exports.update = (req, res) => {
  // Validate Request
  if (!req.body) {
    res.status(400).send({
      message: "Content can not be empty!"
    });
  }

  console.log(req.body);

  Model_User.updateById(
    req.params.UserId,
    new Model_User(req.body),
    (err, data) => {
      if (err) {
        if (err.kind === "not_found") {
          res.status(404).send({
            message: `Not found User with id ${req.params.UserId}.`
          });
        } else {
          res.status(500).send({
            message: "Error updating User with id " + req.params.UserId
          });
        }
      } else res.send(data);
    }
  );
};

// Delete a User with the specified UserId in the request
exports.delete = (req, res) => {
  Model_User.remove(req.params.UserId, (err, data) => {
    if (err) {
      if (err.kind === "not_found") {
        res.status(404).send({
          message: `Not found User with id ${req.params.UserId}.`
        });
      } else {
        res.status(500).send({
          message: "Could not delete User with id " + req.params.UserId
        });
      }
    } else res.send({ message: `User was deleted successfully!` });
  });
};

// Delete all Users from the database.
exports.deleteAll = (req, res) => {
  Model_User.removeAll((err, data) => {
    if (err)
      res.status(500).send({
        message:
          err.message || "Some error occurred while removing all Users."
      });
    else res.send({ message: `All Users were deleted successfully!` });
  });
};
