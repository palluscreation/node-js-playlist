const express = require("express");
const bodyparser = require("body-parser");
var app = express();
const urlencodedParser = bodyparser.urlencoded({ extended: false });
//template engine
app.set("view engine", "ejs");

//middleware
// app.use("/assets", (req, res, next) => {
//   console.log(req.url);
//   next();
// });
app.use("/assets", express.static("assets"));

// app.get("/", (req, res) => {
//   res.send("This is the home page");
// });

// app.get("/contact", (req, res) => {
//   res.send("This is the contact page");
// });

// app.get("/profile/:id", (req, res) => {
//   res.send("You requested to see a profile with the id of " + req.params.id);
// });

app.get("/", (req, res) => {
  res.render("index");
});

app.get("/contact", (req, res) => {
  // console.log(req.query);
  res.render("contact", { qs: req.query });
});

app.post("/contact", urlencodedParser, (req, res) => {
  console.log(req.body);
  res.render("contact-success", { data: req.body });
});

app.get("/profile/:name", (req, res) => {
  let profileData = {
    age: 29,
    job: "He is a ninja",
    hobbies: ["eating", "fighting", "fishing"]
  };
  res.render("profile", { person: req.params.name, data: profileData });
});

app.listen(3000);
