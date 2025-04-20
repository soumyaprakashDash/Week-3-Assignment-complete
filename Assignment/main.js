 //           REQUEST METHOD.
//GET= GOING FOR CONSULTATION TO GET A CHECK UP.
//POST=GOING A NEW KIDNEY INSERTED.
//PUT=GOING TO GET A KIDNEY RELACED.
//DELETE=GOING TO GET A KIDNEY REMOVED.
 //              STATUS CODE
//200=EVERYTHING WENT ON FINE.
//404=DOCTOR IS NOT IN THE HOSPITAL.
//500=MID SURGERY LIGHT WENT AWAY
//411=INPUT WERE INCORRRECT, WRONG PERSON CAME TO SURGERY.
//403= YOU ARE NOT ALLOW FOR HOSPITAL
 const express = require("express");
 const app=express(); 
const user=[{
    name:"sonu",
    kidneys:[{
        healthy:false
    }]
 }];
 app.use(express.json());
 app .get("/",function(req,res){
    const sonuKidneys=user[0].kidneys;
    const numberOfKidneys=sonuKidneys.length;
    let numberOfHealthykidneys=0;
     for(let i=0;i<sonuKidneys.length;i++){
        const numberOfUnhealthykidneys=numberOfKidneys-numberOfHealthykidneys;
        if(sonuKidneys[i].healthy){
            numberOfHealthykidneys = numberOfHealthykidneys + 1;
 }

     }
res.json({
    numberOfKidneys,
    numberOfHealthykidneys,
    numberOfHealthykidneys
 
})
    })
    app.post("/",function(req,res){
        const isHealthy=req.body.isHealthy;
        user[0].kidneys.push({
            healthy:isHealthy
        })
        res.json({
            msg:"done!"
        }) 
    })
    app.put("/",function(req,res){
        for(let i=0;i<user[0].kidneys.length;i++){
            user[0].kidneys[1].healthy=true;
        }
        res.json({});
    })
    //app.delete("/",function(req,res){

    //})
    
 app.listen(3000);