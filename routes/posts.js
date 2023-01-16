const express = require("express");
const { v4: uuidV4 } = require("uuid");
const app = express.Router();

var posts = [
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

app.delete("/:id", (req, res) => {
  const { id } = req.params;
  posts = posts.filter(data => data.id !== id);
  res.send(`Posts with the id ${id} has deleted`);
});

app.patch("/:id", async (req, res) => {
  const index = posts.findIndex(post => post.id == req.params.id);
  if (index !== -1) {
    if (req.body.title) {
      posts[index].title = req.body.title;
    }
    if (req.body.content) {
      posts[index].content = req.body.content;
    }

    res.send(
      `Title has been updated to ${req.body
        .title}.content has been updated to ${req.body.content}`
    );
  } else {
    res.send("Data not Found");
  }
});

module.exports = app;
