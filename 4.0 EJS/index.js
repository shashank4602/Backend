import express from "express";
const port = 3000;
const app = express();
app.get("/", (req, res) => {
    const today = new Date();
    const day = today.getDay();
    let typeday = "It's worktime,";
    let adv = "kaam kro";
    if (day == 0 || day == 6) {
        typeday = "It's weekend,";
        adv = "Chill kro";
    }

    res.render("index.ejs", {
        daytype: typeday,
        advice: adv,
    });
});

app.listen(port, () => {
    console.log(`Server is at ${port}`);
});