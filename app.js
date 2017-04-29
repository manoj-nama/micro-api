const express = require('express');
const app = express();
const PORT = process.env.PORT || 9000;

app.use((req, res, next) => {
  console.log(req.method + ": " + req.url);
  next();
});

app.use(bodyParser.json({limit: '16mb'}));
app.use(userAgent.express());
app.use(bodyParser.urlencoded({
  extended: true
}));

app.listen(PORT, () => {
  console.log(`Server listening on http://localhost:${PORT}`);
});