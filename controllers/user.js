const bluebird = require('bluebird');
const crypto = bluebird.promisifyAll(require('crypto'));
const nodemailer = require('nodemailer');
const passport = require('passport');
const expressValidator = require('express-validator');

const User = require('../schemas/users/user');


exports.postLogin = (req, res, next) => {
    req.assert('email', 'Email is not valid').isEmail();
    req.assert('password', 'Password cannot be blank').notEmpty();
    req.sanitize('email').normalizeEmail({ gmail_remove_dots: false });
  
    const errors = req.validationErrors();
  
    if (errors) {
      return res.send(errors)
    }
  
    passport.authenticate('local', (err, user, info) => {
      if (err) { return next(err); }
      if (!user) {
        res.send('errors', info);
        return res.send(err)
      }
      req.logIn(user, (err) => {
        if (err) { return next(err); }
      return res.send('Success! You are logged in.'   );
        // res.redirect(req.session.returnTo || '/');
      });
    })(req, res, next);
  };


  exports.logout = (req, res) => {
    req.logout();
    res.redirect('/');
  };
  exports.postSignup = (req, res, next) => {
    req.assert('email', 'Email is not valid').isEmail();
    req.assert('password', 'Password must be at least 4 characters long').len(4);
    req.assert('confirmPassword', 'Passwords do not match').equals(req.body.password);
    req.sanitize('email').normalizeEmail({ gmail_remove_dots: false });
  
    const errors = req.validationErrors();
  
    if (errors) {
      return res.send( errors);
    }
  
    const user = new User({
      email: req.body.email,
      password: req.body.password,
      role : req.body.role,
      username : req.body.username,
      category: req.body.category
    });
  
    User.findOne({ email: req.body.email }, (err, existingUser) => {
      if (err) { return next(err); }
      if (existingUser) {
        return res.send('Account with that email address already exists.' );
      }
      user.save((err) => {
        if (err) { return next(err); }
        req.logIn(user, (err) => {
          if (err) {
            return next(err);
          }
         else{
           return res.send("User Saved")
         }
        });
      });
    });
  };

  exports.postUpdateProfile = (req, res, next) => {
    req.assert('email', 'Please enter a valid email address.').isEmail();
    req.sanitize('email').normalizeEmail({ gmail_remove_dots: false });
  
    const errors = req.validationErrors();
  
    if (errors) {
      res.send('errors');
      return
    }
  
    User.findById(req.user.id, (err, user) => {
      if (err) { return next(err); }
      user.email = req.body.email || '';
      user.profile.name = req.body.name || '';
      user.profile.gender = req.body.gender || '';
      user.profile.location = req.body.location || '';
      user.profile.website = req.body.website || '';
      user.save((err) => {
        if (err) {
          if (err.code === 11000) {
            res.send('The email address you have entered is already associated with an account.' );
            return res.redirect('/account');
          }
          return next(err);
        }
        req.flash('success', { msg: 'Profile information has been updated.' });
        res.redirect('/account');
      });
    });
  };
  

  
exports.getActors = (req, res, next) => {
    const categories = req.query.categories;
    const filter = {
      role: req.params.role
    };
    if(categories && categories.length){
      filter.category = {
        $in : categories
      }
    }
    User.find(filter, (err, body) => {
     if (err) { return res.send("error in finding data"); }
     if (body) {
      return res.send(body)
     }
   });
   };
   
  
exports.getCategories = (req, res)=>{
  console.log(req.params)
  const role = req.params.role;
  User.distinct('category', {
    role
  })
  .then(data=>{
    console.log(data)
    return res.send(data);
  })
  .catch(err=>{
    res.send(err)
  })
}

exports.getSingleActor = (req,res,next) => {
  User.findOne({ role: req.params.role, _id: req.params.id }, (err, body) => {
    if (err) { res.send("error in finding data");}
    if (body) {
     console.log(body);
     res.send(body)
     
    }
  });
};

   exports.postUpdatePassword = (req, res, next) => {
    req.assert('password', 'Password must be at least 4 characters long').len(4);
    req.assert('confirmPassword', 'Passwords do not match').equals(req.body.password);
  
    const errors = req.validationErrors();
  
    if (errors) {
      req.flash('errors', errors);
      return res.redirect('/account');
    }
  
    User.findById(req.user.id, (err, user) => {
      if (err) { return next(err); }
      user.password = req.body.password;
      user.save((err) => {
        if (err) { return next(err); }
        req.flash('success', { msg: 'Password has been changed.' });
        res.redirect('/account');
      });
    });
  };


  exports.getReset = (req, res, next) => {
    if (req.isAuthenticated()) {
      return res.redirect('/');
    }
    User
      .findOne({ passwordResetToken: req.params.token })
      .where('passwordResetExpires').gt(Date.now())
      .exec((err, user) => {
        if (err) { return next(err); }
        if (!user) {
          req.flash('errors', { msg: 'Password reset token is invalid or has expired.' });
          return res.redirect('/forgot');
        }
        res.render('account/reset', {
          title: 'Password Reset'
        });
      });
  };
  
  /**
   * POST /reset/:token
   * Process the reset password request.
   */
  exports.postReset = (req, res, next) => {
    req.assert('password', 'Password must be at least 4 characters long.').len(4);
    req.assert('confirm', 'Passwords must match.').equals(req.body.password);
  
    const errors = req.validationErrors();
  
    if (errors) {
      req.flash('errors', errors);
      return res.redirect('back');
    }
  
    const resetPassword = () =>
      User
        .findOne({ passwordResetToken: req.params.token })
        .where('passwordResetExpires').gt(Date.now())
        .then((user) => {
          if (!user) {
            req.flash('errors', { msg: 'Password reset token is invalid or has expired.' });
            return res.redirect('back');
          }
          user.password = req.body.password;
          user.passwordResetToken = undefined;
          user.passwordResetExpires = undefined;
          return user.save().then(() => new Promise((resolve, reject) => {
            req.logIn(user, (err) => {
              if (err) { return reject(err); }
              resolve(user);
            });
          }));
        });
  
    const sendResetPasswordEmail = (user) => {
      if (!user) { return; }
      const transporter = nodemailer.createTransport({
        service: 'SendGrid',
        auth: {
          user: process.env.SENDGRID_USER,
          pass: process.env.SENDGRID_PASSWORD
        }
      });
      const mailOptions = {
        to: user.email,
        from: 'hackathon@starter.com',
        subject: 'Your Hackathon Starter password has been changed',
        text: `Hello,\n\nThis is a confirmation that the password for your account ${user.email} has just been changed.\n`
      };
      return transporter.sendMail(mailOptions)
        .then(() => {
          req.flash('success', { msg: 'Success! Your password has been changed.' });
        });
    };
  
    resetPassword()
      .then(sendResetPasswordEmail)
      .then(() => { if (!res.finished) res.redirect('/'); })
      .catch(err => next(err));
  };
  

  exports.postForgot = (req, res, next) => {
    req.assert('email', 'Please enter a valid email address.').isEmail();
    req.sanitize('email').normalizeEmail({ gmail_remove_dots: false });
  
    const errors = req.validationErrors();
  
    if (errors) {
      req.flash('errors', errors);
      return res.redirect('/forgot');
    }
  
    const createRandomToken = crypto
      .randomBytesAsync(16)
      .then(buf => buf.toString('hex'));
  
    const setRandomToken = token =>
      User
        .findOne({ email: req.body.email })
        .then((user) => {
          if (!user) {
            req.flash('errors', { msg: 'Account with that email address does not exist.' });
          } else {
            user.passwordResetToken = token;
            user.passwordResetExpires = Date.now() + 3600000; // 1 hour
            user = user.save();
          }
          return user;
        });
  
    const sendForgotPasswordEmail = (user) => {
      if (!user) { return; }
      const token = user.passwordResetToken;
      const transporter = nodemailer.createTransport({
        service: 'SendGrid',
        auth: {
          user: process.env.SENDGRID_USER,
          pass: process.env.SENDGRID_PASSWORD
        }
      });
      const mailOptions = {
        to: user.email,
        from: 'hackathon@starter.com',
        subject: 'Reset your password on Hackathon Starter',
        text: `You are receiving this email because you (or someone else) have requested the reset of the password for your account.\n\n
          Please click on the following link, or paste this into your browser to complete the process:\n\n
          http://${req.headers.host}/reset/${token}\n\n
          If you did not request this, please ignore this email and your password will remain unchanged.\n`
      };
      return transporter.sendMail(mailOptions)
        .then(() => {
          req.flash('info', { msg: `An e-mail has been sent to ${user.email} with further instructions.` });
        });
    };
  
    createRandomToken
      .then(setRandomToken)
      .then(sendForgotPasswordEmail)
      .then(() => res.redirect('/forgot'))
      .catch(next);
  };