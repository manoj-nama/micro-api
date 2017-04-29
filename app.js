const express = require('express');
const app = express();
const PORT = process.env.PORT || 8888;
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const config = require('./config');

app.use((req, res, next) => {
  console.log(req.method + ": " + req.url);
  next();
});

mongoose.connect(config.mongo_uri);

app.use(bodyParser.json({limit: '16mb'}));
app.use(bodyParser.urlencoded({
  extended: true
}));

app.listen(PORT, () => {
  console.log(`Server listening on http://localhost:${PORT}`);
});