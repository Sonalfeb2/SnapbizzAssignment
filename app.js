const express = require("express");
const bodyparser = require("body-parser");
const posts = require("./routes/posts");
const app = express();
app.use(bodyparser.json());
const PORT = 5000;
app.use("/posts", posts);
app.get("/", (req, res) => {
  res.send("Hello from Sonal Agrawal");
});
app.listen(PORT, () => {
  console.log(`Server Rinning on PORt - http://localhost:${PORT}`);
});
