const jwt = require ("jsonwebtoken")

function decodeJwt(token) {
    // true ,false 

    const decoded = jwt .decode(token);
    if(decoded){
        return true ;
    }else {
        return false ;
    }
}
console.log(decodeJwt("eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJuYW1lIjoic291bXlhIiwiYWNjb3V0TnVtYmVyIjoxMjMyMzIsImlhdCI6MTc0NTEyNjgyMn0.qvD5jT_i7dNZMbVmpglcRwxA51mv-o7iwgYhGVlvw3k"))