/* GET home page */
const mongoose =require('mongoose');
//const borrow =mongoose.model('borrow');
const user=mongoose.model('user');
const trans = require('./transaction');
const home = function(req, res){
if(req.session.user)
  res.render('home', { title: 'kenfin' })
else
  res.redirect('/login');
};

const login = function(req, res){
 
  res.render('login', { title: 'kenfin' })
  
};

const signup = function(req, res){
  res.render('signup', { title: 'kenfin' })
 
};
const yaarUdhaar= function(req, res){
  if(req.session.user)
  res.render('yaarUdhaar', { title: 'kenfin' })
  else
  res.redirect('/login');
};

const budgetdude= function(req, res){
  if(req.session.user)
  res.render('budgetdude', { title: 'kenfin' })
  else
  res.redirect('/login');
};

const moneybank= function(req, res){
  if(req.session.user)
  res.render('moneybank', { title: 'kenfin' })
  else
  res.redirect('/login');
};

const lender= function(req, res){
  if(req.session.user)
  // const noti = trans.getnotifications(req,res);
  res.render('lender', { title: 'kenfin' })

  else
  res.redirect('/login');

 };
//  res.render('lender', { title: 'kenfin' })

const borrower= function(req, res){
  if(req.session.user)
  res.render('borrower', { title: 'kenfin' ,notifications:20})
  else
  res.redirect('/login');
};

const wallet= function(req, res){
  if(req.session.user)
  res.render('wallet', { title: 'kenfin' })
  else
  res.redirect('/login');
};


const logout = function(req,res){
  req.session.destroy(function(err){
      if(err){
          console.log(err);
      } else {
          res.redirect('/login');
      }
  });
}


module.exports = {
  login,logout,
  signup,
  wallet,
  yaarUdhaar,
  lender,
  borrower,
  moneybank,
  budgetdude,
  home
};
