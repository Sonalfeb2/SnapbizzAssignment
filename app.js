const express = require("express");
const bodyparser = require("body-parser");
const posts = require("./routes/posts");
const app = express();
app.use(bodyparser.json());
const PORT = 5000;
app.use("/posts", posts);
app.get("/", (req, res) => {
  res.send(`<h1>Hello from Sonal Agrawal</h1>
  <h4>Use POSTMAN by following Api</h4>
  <h4>For getting all Post use GET req http://localhost:5000/posts</h4>
  <h4>For creating  data use POST req http://localhost:5000/posts</h4>
  <h4>For deleting data use DELETE req http://localhost:5000/posts/:id</h4>
  <h4>For updating data use PATCH req http://localhost:5000/posts/:id</h4>`);
});
app.listen(PORT, () => {
  console.log(`Server Rinning on PORT - http://localhost:${PORT}`);
});
