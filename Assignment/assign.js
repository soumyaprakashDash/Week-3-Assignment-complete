//                  ASSIGNMENT
const express = require("express");
const jwt = require("jsonwebtoken");
const jwtPassword = "123456";

const app = express();
app.use(express.json());

const ALL_USERS = [
  {
    username: "soumya prakash dash",
    password: "123",
    name: "soumuya",
  },
  {
    username: "suchitra dash",
    password: "12325",
    name: "suchi",
  },
  {
    username: "dinesh gochhayta",
    password: "1255",
    name: "dina",
  },
];

function userExists(username, password) {
  let userExist = false;
  for (let i = 0; i < ALL_USERS.length; i++) {
    if (
      ALL_USERS[i].username === username &&
      ALL_USERS[i].password === password
    ) {
      userExist = true;
    }
  }
  return userExist;
}

app.post("/signin", function (req, res) {
  const username = req.body.username;
  const password = req.body.password;

  if (!userExists(username, password)) {
    return res.status(403).json({
      msg: "User does not exist in our memory",
    });
  }

  const token = jwt.sign({ username: username }, jwtPassword);
  return res.json({
    token,
  });
});

app.get("/users", function (req, res) {
  const token = req.headers.authorization;

  try {
    const decoded = jwt.verify(token, jwtPassword);
    const username = decoded.username;

    // ✅ Use filter and map to return clean list of other users
    const otherUsers = ALL_USERS
      .filter((user) => user.username !== username)
      .map((user) => ({
        username: user.username,
        name: user.name,
      }));

    res.json({
      users: otherUsers,
    });
  } catch (err) {
    return res.status(403).json({
      msg: "Invalid or missing token",
    });
  }
});

app.listen(3000, () => {
  console.log("Server running on http://localhost:3000");
});
