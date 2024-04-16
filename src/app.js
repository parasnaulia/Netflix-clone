const express = require("express");
const jwt = require("jsonwebtoken");
const app = express();
var cors = require("cors");
require("./conn/conn");
app.use(express.json());
const User = require("./schema/schema");
app.use(cors());
require("dotenv").config();
app.use(express.urlencoded({ extended: false }));
// console.log(process.env.SE);
const jwtToken = jwt.sign(
  { name: "Paras", email: "parasnaulia645@gmail.com" },
  // process.env.SE
  "mynameisparasnauliafrombhimtal"
);
console.log(jwtToken);
//Now this Gernerated web token we have to send to cookie
// res.cookie("Netflixx", jwtToken);
app.get("/", (req, res) => {
  res.send("Hello Server is Listing");
});
app.post("/register", async (req, res) => {
  console.log("req body");
  //   console.log(req.body);
  const { name, email, password } = req.body;
  console.log("Omg Connection Sucessful");
  const data1 = await User.findOne({ email });
  const newUSer = new User({
    name: name,
    email: email,
    password: password,
  });
  console.log("this is my register body");
  console.log(req.body);

  let jwtToken = jwt.sign(
    { name: name, email: email },
    "mynameisparasnauliafrombhimtal"
  );
  res.json({ newUSer, jwtToken });
  // res.send(data);
  const data = await newUSer.save();
  // console.log(data1);
});
app.post("/verification", (req, res) => {
  console.log("this is my verification");
  console.log("this is req.boy");
  // console.log(req.body);
  console.log("This is Verification called");
  let verify = jwt.verify(req.body.token, "mynameisparasnauliafrombhimtal");
  // console.log(verify);
  if (verify) {
    // res.json(verify);
  }
});
app.post("/login", async (req, res) => {
  // console.log(req.body);
  console.log("Login PAge is Finally called");
  const { email, password } = req.body;
  // console.log(req.body.email);
  const normalizedEmail = email.toLowerCase();
  const data = await User.findOne({ email: normalizedEmail });
  console.log(data);
  // console.log(data);
  // res.json(data);
  if (data) {
    if (req.body.password === data.password) {
      let jwtToken = jwt.sign(
        { name: data.name, email: data.email },
        // process.env.SE
        "git push -u origin main"
      );
      // res.json({ newUSer, jwtToken });
      // console.log("correct Password")
      return res.status(200).json({ data, jwtToken });
    }
  }
  res.status(400).send("Sorry Somthing went Wrong");
});
app.get("/pp", (req, res) => {
  return res.send("PP");
});

app.listen(9000, () => {
  console.log("App is Listing");
});
