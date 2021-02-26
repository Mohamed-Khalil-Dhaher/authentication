const express = require("express");
const router = express.Router();
const signUpModel = require("../models/signUpModels");

router.post("/signup", (req, res) => {
  const signedUpUser = new signUpModel({
    firstName: req.body.firstName,
    lastName: req.body.lastName,
    email: req.body.email,
    photo: req.body.photo,
    bio: req.body.bio,
    phoneNumber: req.body.phoneNumber,
    password: req.body.password
  });
  signedUpUser
    .save()
    .then((data) => {
      res.json(data);
    })
    .catch((err) => {
      res.json(err);
    });
});

router.get("/signup", (req, res) => {
  signUpModel
    .find()
    .then((result) => {
      res.send(result);
    })
    .catch((err) => {
      res.send(err);
    });
});

router.put("/signup/:_id", (req, res) => {
  console.log(req.body, typeof req.params._id);
  signUpModel
    .findByIdAndUpdate({ _id: req.params._id }, req.body, { new: true })
    .then((result) => {
      res.send(result);
    });
});

module.exports = router;
