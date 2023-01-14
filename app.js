const express = require("express");
const bodyparser = require("body-parser");
const posts = require("./routes/post");
const app = express();
app.use(bodyparser.json());
const PORT = 5000;
app.use("/posts", posts);
app.get("/", (req, res) => {
  res.send("Hello from Snapbizz");
});
app.listen(PORT, () => {
  console.log(`Server Rinning on PORt - http://localhost:${PORT}`);
});
