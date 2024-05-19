import express from "express";
import bodyParser from "body-parser";

const app = express();
const port = 3000;

const db = new pg.Client({
  user: "postgres",
  host: "localhost",
  database: "permalist",
  password: "Iitbhuee@123",
  port: 5432,
});
db.connect();

app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static("public"));
//express.static(): express.static() is a built-in middleware function in Express.js. 
//It is used to serve static files such as HTML, CSS, JavaScript, images, and other resources 
//from a directory specified by the developer.

let items = [
  { id: 1, title: "Buy milk" },
  { id: 2, title: "Finish homework" },
];

app.get("/", (req, res) => {
  res.render("index.ejs", {
    listTitle: "Today",
    listItems: items,
  });
});

app.post("/add", (req, res) => {
  const item = req.body.newItem;
  items.push({ title: item });
  res.redirect("/");
});

app.post("/edit", (req, res) => { });

app.post("/delete", (req, res) => { });

app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
