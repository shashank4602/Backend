const express = require('express')
const app = express()

app.get("/:num", (req, res) => {
    const data = req.params;
    console.log(data);
    res.send(data.num);
});

const port = 3000;
app.listen(port, (req, res) => {
    console.log(`Server is at ${port}`);
});