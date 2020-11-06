const express = require("express");
const cors = require("cors");
const bodyParser = require("body-parser");
const app = express();
const { Routes } = require("./routes/index");

app.use(cors());
app.use(bodyParser.json());
Routes(app);
const PORT = 8000;

if (process.env.NODE_ENV === "production") {
  app.use(express.static("client/build"));
  app.get("*", (req, res) => {
    res.sendFile(path.join(__dirname, "client", "build", "index.html"));
  });
}

app.listen(PORT, () => console.log(`app running on ${PORT}`));
