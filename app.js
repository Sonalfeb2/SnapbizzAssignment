const express = require("express");
const bodyparser = require("body-parser");
const app = express();
app.use(bodyparser.json());
const PORT = 5000;
app.listen(PORT, () => {
  console.log(`Server Rinning on PORt - http://localhost:${PORT}`);
});
