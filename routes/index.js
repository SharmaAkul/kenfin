const express = require('express');
const router = express.Router();
const ctrlMain = require('../controllers/main');
const mongoose =require('mongoose');
const user=mongoose.model('user');

const ctrlUser = require('../controllers/signup');
const ctrlUser1 = require('../controllers/transaction');



router.get('/', ctrlMain.home);
router.get('/signup', ctrlMain.signup);
router.get('/login', ctrlMain.login);
router.get('/home/budgetdude', ctrlMain.budgetdude);
router.get('/moneybank', ctrlMain.moneybank);
router.get('/yaarUdhaar', ctrlMain.yaarUdhaar);
 router.get('/lender', ctrlMain.lender);
router.get('/wallet', ctrlMain.wallet);
router.post('/borrower', ctrlUser1.borrower);
router.get('/logout', ctrlMain.logout);

router.post('/signup',ctrlUser.userCreate);
router.post('/login',ctrlUser.userFind);
router.get('/borrower',function(req,res){
    res.render('borrower')
});
router.get('/lender',function(req,res){
    res.render('lender')
});
 router.post('/lender',ctrlUser1.lender1);
// router.post('/borrower',ctrlUser1.lend1);





module.exports = router;
