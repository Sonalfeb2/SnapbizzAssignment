const express = require("express");

const app = express.Router();

let posts = [
  {
    id: 1,
    title: "First post",
    content: "Lorem Ipsum"
  },
  {
    id: 2,
    title: "Second post",
    content: "Lorem Ipsum again"
  }
];

app.get("/", (req, res) => {
  res.send(posts);
});
app.post("/", (req, res) => {
  const newPost = req.body;
  posts.push(newPost);
  res.send(posts);
});
module.exports = app;
