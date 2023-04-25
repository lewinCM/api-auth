
require('dotenv').config();
const express = require('express');
const cors = require('cors');
const { dbConnect } = require('./config/mongo');
const app = express();

// middlewaress
app.use(cors())
app.use(express.json())

port = process.env.PORT || 3001
app.use("/api/v1", require("./routes"));
app.listen(port, () => {
  dbConnect()
  console.log(`listening on http://localhost:${port}`)
});
