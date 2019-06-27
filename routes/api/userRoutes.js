const db = require("../../models");
const router = require("express").Router();
const passport = require("../../config/passport");

router.route("/")
  .get(function(req, res) {
      db.User.findAll({attributes:["id"]}
      ).then(function(response) {
      res.json(response);
    })
  })

router.route("/isLoggedIn")
  .get(function(req, res) {
    if (req.user) {
      const user = req.user.dataValues
      res.json({
        userId: user.id,
      }).status(200);
    }
    else {
      res.json({}).status(200);
    }
  })
  
router.post('/login',
  passport.authenticate('local', { failureMessage: "invalid username or password"}), (req, res, next) => {
    if (req.user) {
      console.log("there is a user")
    }  
    else{
      console.log("no user")
    }
    req.session.save((err) => {
      if (err) {
          return next(err);
      }
      let user = {
        user_id: req.user.id
      }
      res.status(200).send(user);
    });
});

// function(req, res, next) {
//   passport.authenticate('local', function(err, user, info) {
//     if (err) { return next(err); }
//     if (!user) { return res.redirect('/login'); }
//     req.logIn(user, function(err) {
//       if (err) { return next(err); }
//       return res.send(user);
//     });
//   })(req, res, next);
// });

router.get('/logout', (req, res, next) => {
  req.logout();
  req.session.save((err) => {
      if (err) {
          return next(err);
      }
      res.status(200).send('OK');
  });
});

router.post("/signup", function(req, res) {
  let body = req.body;
  db.User.create(
    {
      email: body.email,
      first_name: body.first_name,
      last_name: body.last_name,
      user_name: body.username,
      date_of_birth: body.date_of_birth,
      gender: body.gender,
      password: body.password
    }
  ).then(function(data) {
    let user = {
      user_id: data.dataValues.id
    }
    res.status(200).send(user);
  }).catch(function(err) {
    console.log(err);
    res.status(422).send(err.errors[0].message);
  });
});


module.exports = router;