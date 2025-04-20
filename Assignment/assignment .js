const jwt  = require ('jsonwebtoken');
const jwtPassword = "secret";
const zod = require ('zod');

const emailSchema = zod.string().email ();
const passwordSchema = zod.string().min(2);

function signJwt (username,password){
  const usernameResponse = emailSchema.safeParse(username);
  const passwordResponse = passwordSchema.safeParse(password)

  if(!usernameResponse.success || !passwordResponse.success){
    return null ;
  }

  const signture = jwt .sign ({
    username 
  },jwtPassword);

  return signture ;

}

const ans = signJwt ("soumyaprakash dash@gmail.com", "3")
console.log (ans);
