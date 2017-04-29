const express = require('express');
const app = express();
const PORT = process.env.PORT || 9000;

app.use((req, res, next) => {
  console.log(req.method + ": " + req.url);
  next();
});

app.listen(PORT, () => {
  console.log(`Server listening on http://localhost:${PORT}`);
});