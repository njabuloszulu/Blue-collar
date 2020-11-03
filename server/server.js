const express = require("express");
const cors = require("cors");
const bodyParser = require("body-parser");
const app = express();
const { Routes } = require("./routes/index");

app.use(cors());
app.use(bodyParser.json());
Routes(app);
const PORT = 8000;

app.listen(PORT, () => console.log(`app running on ${PORT}`));
