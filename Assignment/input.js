const express = require("express");
const app = express();

// Middleware to parse JSON body
app.use(express.json());

app.post("/health-checkup", function(req, res) {
    const kidneys = req.body.kidneys;
    const kidneyLength = kidneys.length;
    
    console.log("Received kidneys:", kidneys); // Debug log

    res.send("You have " + kidneyLength + " kidneys");
});

app.listen(3000, () => {
    console.log("server is running on http://localhost:3000");
});
