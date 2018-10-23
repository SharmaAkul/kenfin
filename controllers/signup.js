const mongoose =require('mongoose');
const user=mongoose.model('user');
const user1=mongoose.model('user');

const userCreate =function(req,res){
   //var akul=0; 
    user.findOne({email:req.body.email},function(err, user){

       if(err){
            res
                .status(400)
                .json(err);
        }
          if(user){
            res.send('Username already exists');                         
           }else{
              
         user1.create({
        password:req.body.password,
        email:req.body.email,
        username:req.body.username
    },(err,user1) =>{
        if(err){
            res
                .status(400)
                .json(err);
        }else{
            res.status(401);    
             res.render('login');
            }
        
        });
    }
    });
}


        
const userFind=function(req,res){
    if(req.session.user)
    {

    }
    else{
        user.findOne({email:req.body.email,password:req.body.password},function(err,user){
            if(err)
                res.status(500);
            if(!user)
            {
                res.status(200);
                res.render('login');
            }
            else
            { 
                res.status(401);    
                req.session.user=user;
                    res.redirect('/');
            }
        });
    }
}

module.exports={
    userCreate,userFind
}

