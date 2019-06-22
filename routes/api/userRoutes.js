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
  
router.post('/login', passport.authenticate('local', { failureRedirect: '/?error=LoginError'}), (req, res, next) => {
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
  console.log(req.body);
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
  ).then(function() {
    res.redirect(307, "/api/login");
  }).catch(function(err) {
    console.log(err);
    res.json(err);
    // res.status(422).json(err.errors[0].message);
  });
});

// router.route("/signup")
//   .post(function(req, res) {
//     const body = req.body
//     console.log(req.body);
//     db.User.create(
//       {
//         email: body.email,
//         first_name: body.first_name,
//         last_name: body.last_name,
//         user_name: body.username,
//         date_of_birth: body.date_of_birth,
//         gender: body.gender,
//         password: body.password
//       }
//     )
//     .then(function() {
//       res.redirect(307, "/api/users/login");
//     })
//     .catch(function(err) {
//       res.json(err);
//     })
//   })


module.exports = router;