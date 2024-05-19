import express from "express";
const port = 3000;
const app = express();

app.get("/", (req, res) => {
    res.send("Hello");
});

app.get("/about", (req, res) => {
    res.send("About me");
});

app.get("/contact", (req, res) => {
    res.send("Phone no");
});

app.listen(port, () => {
    console.log(`Server is running at ${port}.`);
});

// If we run index.js of Express Server folder we will get error because it will try to run on
// same port
//Try to run using nodemon index.js