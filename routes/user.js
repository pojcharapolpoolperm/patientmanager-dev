const express = require('express');
const router = express.Router();
const mongoose = require('mongoose');
const flash = require('connect-flash');
const bcrypt = require('bcryptjs');
const passport = require('passport');
const { ensureAuthenticated } = require('../helpers/auth');

// Load User Model
require("../models/User");
require("../models/Form1");
const User = mongoose.model('users');
const Form1 = mongoose.model('form1');


// User Login Route
router.get('/login', (req, res) => {
  if (req.isAuthenticated()) {
    res.redirect('/patients/dashboard');
  } else {
    res.render('users/login');
  }

})

// Login Form POST
router.post('/login', (req, res, next) => {
  passport.authenticate('local', {
    successRedirect: '/patients/dashboard',
    failureRedirect: '/user/login',
    failureFlash: true
  })(req, res, next);
});

// User Register Route
router.get('/register', ensureAuthenticated, (req, res) => {
  if (req.user.admin) {
    res.render('users/register');
  } else {
    res.redirect('/patients/dashboard');
  }
});

router.post('/register', ensureAuthenticated, (req, res) => {
  let errors = [];

  if (req.body.password != req.body.check_password) {
    errors.push({ text: 'Passwords do not match' });
  }

  if (req.body.password.length < 4) {
    errors.push({ text: 'Password must be at least 4 characters' });
  }

  if (errors.length > 0) {
    res.render('users/register', {
      errors: errors,
      firstName: req.body.firstName,
      lastName: req.body.lastName,
      username: req.body.username,
      email: req.body.email,
      password: req.body.password,
      check_password: req.body.check_password
    })
  } else {
    User.findOne({ email: req.body.email })
      .then(user => {
        if (user) {
          req.flash('error_msg', 'Email already registered');
          res.redirect('/user/register')
        } else {
          const newUser = new User({
            firstName: req.body.firstName,
            lastName: req.body.lastName,
            username: req.body.username,
            email: req.body.email,
            password: req.body.password,
            admin: false
          });

          console.log(newUser);

          bcrypt.genSalt(10, (err, salt) => {
            bcrypt.hash(newUser.password, salt, (err, hash) => {
              if (err) throw err;
              newUser.password = hash;

              newUser.save()
                .then(user => {
                  req.flash('success_msg', 'You are now registered and can log in');
                  res.redirect('/user/register');
                })
                .catch(err => {
                  console.log(err);
                  return;
                });
            });
          });
        }
      })
  }
})

// Logout User
router.get('/logout', (req, res) => {
  req.logout();
  req.flash('success_msg', 'You are logged out');
  res.redirect('/user/login')
})

// Show Users List (Admin)
router.get('/show', ensureAuthenticated, (req, res) => {
  if (req.user.admin) {
    User.find({ admin: false })
      .then(users => {
        res.render('users/show', {
          users: users
        });
      });
  } else {
    req.flash('error_msg', 'Not Authorized');
    res.redirect('/patients/dashboard');
  }
});

// Delete Users (Admin)
router.delete('/manage/remove/:id', ensureAuthenticated, (req, res) => {
  if (req.user.admin) {
    User.remove({ _id: req.params.id })
      .then(() => {
        req.flash('success_msg', 'User Deleted Successfully');
        res.redirect('/user/show');
      })
  } else {
    req.flash('error_msg', 'Not Authorized');
    res.redirect('/patients/dashboard');
  }

});

// Edit User (Admin)
router.get('/manage/edit/:id', ensureAuthenticated, (req, res) => {
  if (req.user.admin) {
    User.findOne({ _id: req.params.id })
      .then(users => {
        res.render('users/edit', {
          users: users
        })
      })
  } else {
    req.flash('error_msg', 'Not Authorized');
    res.redirect('/patients/dashboard');
  }

});

// Edit User Process (Admin)
router.put('/manage/edit/:id', ensureAuthenticated, (req, res) => {
  if (req.user.admin) {
    let errors = [];

    if (req.body.password != req.body.check_password) {
      errors.push({ text: 'Passwords do not match' });
    }

    if (req.body.password.length < 4) {
      errors.push({ text: 'Password must be at least 4 characters' });
    }

    if (errors.length > 0) {
      User.findOne({ _id: req.params.id })
        .then(users => {
          res.render('users/edit', {
            errors: errors,
            users: users
          });
        })
    } else {
      User.findOne({ _id: req.params.id })
        .then(user => {

          const newUser = {
            firstName: req.body.firstName,
            lastName: req.body.lastName,
            username: req.body.username,
            email: req.body.email,
            password: req.body.password,
            admin: false
          };

          console.log(newUser);

          bcrypt.genSalt(10, (err, salt) => {
            bcrypt.hash(newUser.password, salt, (err, hash) => {
              if (err) throw err;
              newUser.password = hash;

              User.update({ _id: req.params.id }, newUser, function (err, result) {
                if (err) console.log(err);
                else {
                  req.flash('success_msg', 'User Data Updated');
                  res.redirect('/user/show');
                }
              });
            });
          })
        });
    }
  } else {
    req.flash('error_msg', 'Not Authorized');
    res.redirect('/patients/dashboard');
  }
});

// Update Admin Profile
router.put('/profile/update/:id', ensureAuthenticated, (req, res) => {
  if (req.user.admin) {
    let errors = [];

    if (req.body.password != req.body.check_password) {
      errors.push({ text: 'Passwords do not match' });
    }

    if (req.body.password.length < 4) {
      errors.push({ text: 'Password must be at least 4 characters' });
    }

    if (errors.length > 0) {
      User.findOne({ _id: req.params.id })
        .then(users => {
          res.render('users/profile', {
            errors: errors,
            users: users
          });
        })
    } else {

      User.findOne({ _id: req.params.id })
        .then(user => {
          user.firstName = req.body.firstName;
          user.lastName = req.body.lastName;
          user.username = req.body.username;
          user.email = req.body.email;
          user.password = req.body.password;
          user.admin = user.admin;
          
          bcrypt.genSalt(10, (err, salt) => {
            bcrypt.hash(user.password, salt, (err, hash) => {
              if (err) throw err;
              user.password = hash;

              user.save().then(user => {
                req.flash('success_msg', 'Profile Updated');
                res.redirect('/user/show')
              });
            });
          })
        });
    }
  } else {
    req.flash('error_msg', 'Not Authorized');
    res.redirect('/patients/dashboard');
  }
});

router.get('/profile/:id', ensureAuthenticated, (req, res) => {
  res.render('users/profile');
});

// router.get('/manage/show/:id', ensureAuthenticated, (req, res) => {
//   User.findOne({_id: req.params.id})
//     .then(users => {
//       if(users){
//         res.render('users/profile_show', {
//           users: users
//         });
//       }
//     });
// });

module.exports = router;