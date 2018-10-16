
const friends = require("../data/friends.js");
const express = require

module.exports = function (app) {
  //create GET route to send back as JSON
  app.get("/api/friends", function (req, res) {
    res.json(friends);
  })
  //create POST route
  app.post("/api/friends", function (req, res) {
    //grab sent information
    const newFriend = req.body;
    //add to data
    friends.push(newFriend);
    res.json(newFriend);
  })
}