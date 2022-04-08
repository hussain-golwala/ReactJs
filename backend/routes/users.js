var express = require("express");
var router = express.Router();
var User = require("../models/users");

//Create User DB Or register DB
router.post("/", (req, res) => {
  const users = req.body;

  User.create({
    firstName: users.firstName,
    lastName: users.lastName,
    email: users.email,
    city: users.city,
    states: users.states,
    country: users.country,
    department: users.department,
    gender: users.gender,
  })
    .then((result) => {
      return res.status(200).json({
        success: true,
        error: false,
        data: result,
        msg: "Users created successfully",
      });
    })
    .catch((err) => {
      return res.status(500).json({
        success: false,
        error: true,
        data: err,
        msg: "Error creating user",
      });
    });
});

// GET users listing.
router.get("/", function (req, res, next) {
  User.find()
    .then(function (users) {
      return res.status(200).json({
        success: true,
        error: false,
        data: users,
        msg: "Users fetched successfully",
      });
    })
    .catch((err) => {
      return res.status(500).json({
        success: false,
        error: true,
        data: null,
        msg: "Error fetching users",
      });
    });
});

// GET users listing on particular ID
router.get("/:id", function (req, res, next) {
  User.find()
    .then(function (users) {
      return res.status(200).json({
        success: true,
        error: false,
        data: users,
        msg: "Users fetched successfully",
      });
    })
    .catch((err) => {
      return res.status(500).json({
        success: false,
        error: true,
        data: null,
        msg: "Error fetching users",
      });
    });
});

//PATCH update by Id in DB with first name & last name
router.patch("/:id", (req, res) => {
  const usersId = req.params.id;
  const users = req.body;
  User.findByIdAndUpdate(usersId, {
    $set: {
      firstName: users.firstName,
      lastName: users.lastName,
      email: users.email,
      city: users.city,
      states: users.states,
      country: users.country,
      department: users.department,
      gender: users.gender,
    },
  })
    .then((users) => {
      return res.status(200).json({
        success: true,
        error: false,
        msg: "Users Updated successfully",
      });
    })
    .catch((err) => {
      return res.status(500).json({
        success: false,
        error: true,
        data: err,
        msg: "Error Updating user",
      });
    });
});

//DELETE user Db with Id
router.delete("/:id", (req, res) => {
  const usersId = req.params.id;
  console.log("usersId", usersId);
  User.findByIdAndDelete(usersId)
    .then((users) => {
      return res.status(200).json({
        success: true,
        error: false,
        data: [],
        msg: "Users Deleted successfully",
      });
    })
    .catch((err) => {
      return res.status(500).json({
        success: false,
        error: true,
        data: err,
        msg: "Error deleting user",
      });
    });
});

module.exports = router;
