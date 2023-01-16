const express = require("express");
const { v4: uuidV4 } = require("uuid");
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
  if (req.body.id) {
    posts.push(newPost);
  } else {
    posts.push({ ...newPost, id: uuidV4() });
  }
  res.send(`Post with the title ${req.body.title} saved to the database`);
});
module.exports = app;
