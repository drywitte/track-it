const apiRoutes = require("./api");
const db = require("../../models");

module.exports = function(app) {
  app.get("/api/users", function(req, res) {
    db.User.findAll(
    ).then(function(response) {
        console.log("here's a response")
      res.json(response);
    });
  });
}