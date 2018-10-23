const mongoose =require('mongoose');
const sendMsg = require('aws-sns-sms');

const transaction=mongoose.model('transaction');
// const lend1 =function(req,res){
//     transaction.create({
//         email:req.body.email,
//         mobile_number:req.body.mobile_number,
//         message:req.body.message,
//     },(err,transaction) =>{
//         if(err){
//             res
//                 .status(400)
//                 .json(err);
//         }else{
//           //  const data={transaction};
//             res
//                 .redirect('/');
//                 return;
//         }
        
//     });
// };

/*
const getnotifications = function(req,res){
    transaction.find({
      email:req.session.user}
      ,{limit:2
    },function(err,transaction){
     if(err)
     {
         console.log(err);
         res.json(err);
         return;
     }
     else
     {
         res.json(transaction);
     }
    });
}*/
// var otpGenerator = require('otp-generator')
 
// var x= otpGenerator.generate(6, { upperCase: false, specialChars: false ,alphabets: false }); 
const borrower=(req,res)=>{
    let awsConfig = {
        accessKeyId: 'AKIAJTTLSA36GASEHT6A',
        secretAccessKey: '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',
        region: 'us-east-1'
        };
        let msg = {
          "message": req.body.message,
          "sender": "Prabal",
          "phoneNumber": "+91"+req.body.mobile_number // phoneNumber along with country code
        };
        sendMsg(awsConfig, msg).then(data => {
            // res.redirect('/borrower');
          console.log("Message sent");
          transaction.create({
            email:req.body.email,
            mobile_number:req.body.mobile_number,
            message:req.body.message,
        },(err,transaction) =>{
            if(err){
                res
                    .status(400)
                    .json(err);
            }else{
              //  const data={transaction};
                res
                    .redirect('/');
                    // return;
            }
            
        });
        //   console.log(x);
        })
    //     .catch(err => {
    //       console.log(err);
    //     });  
    //   res.render('home');
}


// ('/borrower', (req, res) => {
//  //let sendMsg = require('aws-sns-sms');
//   let awsConfig = {
//   accessKeyId: 'AKIAJTTLSA36GASEHT6A',
//   secretAccessKey: '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',
//   region: 'us-east-1'
//   };
//   let msg = {
//     "message": req.body.message,
//     "sender": "Prabal",
//     "phoneNumber": "+919813493900" // phoneNumber along with country code
//   };
//   sendMsg(awsConfig, msg).then(data => {
//     console.log("Message sent");
//     console.log(x);
//   })
//   .catch(err => {
//     console.log(err);
//   });  
// res.render('contact');
// });

module.exports={
    // lend1,
    // getnotifications,
    borrower
}

/*,(err,user) =>{
        if(err){
            res
                .status(400)
                .json(err);
        }else{
            const data={user};
            if(data.user==null){
                res.json(err);
            }
            else{
            res
                .json(data);
                return;
            }
        }
        
    }*/