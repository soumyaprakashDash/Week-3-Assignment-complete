const jwt = require ("jsonwebtoken");

// decode ,verify , generate 

const value = {
    name: "soumya",
    accoutNumber : 123232
}
// sign and not generate 

const token = jwt.sign(value ,"secret");
console.log (token); 