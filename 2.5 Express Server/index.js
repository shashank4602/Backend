import express from "express";
const port = 3000;
const app = express();

app.listen(port, () => {
    console.log(`Server is running at ${port}.`);
});
//Ctrl + C to end