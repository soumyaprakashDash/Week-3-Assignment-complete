  const jwt = require ('jsonwebtoken');
 const value = {
  name: "soumya",
  accoutNumber : 123232
 }

 const verifiedValue = jwt.verify("eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJuYW1lIjoic291bXlhIiwiYWNjb3V0TnVtYmVyIjoxMjMyMzIsImlhdCI6MTc0NTEyNjgyMn0.qvD5jT_i7dNZMbVmpglcRwxA51mv-o7iwgYhGVlvw3k","secret");
 console.log (verifiedValue);