const express = require ("express");

 const app = express ();
 // function thatv returns  a boolean if the age of person is more than 14
 function isOldEnough(age){
    if (age>=14){
         return  true ;

    }else{
        return false;
    }
 }
  app .get ("/ride2", function(req,res){
    if(isOldEnough(req.query.age)){
        res.json({
            msg:"you have successfully riden the ride 2"
        })
    }else{
        res.status(400).json({
            msg:"sorry you are not of age  yet"
        })
    }
  });
  app .get ("/ride1", function(req,res){
    if(isOldEnough(req.query.age)){
        res.json({
            msg:"you have successfully riden the ride 1"
        })
    }else{
        res.status(497).json({
            msg:"sorry you are not of age  yet"
        })
    }
  });
  app.listen (3001);