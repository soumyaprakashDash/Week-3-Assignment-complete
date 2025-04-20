 // when you run the code go to postman add authorization that username = suchitra and password =pass then run 
 // post method use body not get method
 const express  = require("express");
 const app = express ();

app.get("/health-checkup",function(req,res){
     const username =  req.headers.username;
     const password = req.headers.password;
     const kidneyId = req. query .kidneyId;


    if (username !="suchitra" || password != "pass"){
res.status(400).json({"msg":"something with your input "})
    return
    }
    
        if(kidneyId !=1 && kidneyId != 2){
            res.status(400).json({"msg":"something with your input  "})
    return
        }
        res.json({
            msg:"your kidney is fine!"
        })
});
app.listen(3000); 