const express = require('express')
const app = express();
const port = 5003;
const host = '0.0.0.0';

app.get('/', (req, res) => {
  res.sendFile(__dirname + '/index.html');
});

app.use(express.static(__dirname));

app.listen(port, () => {
  console.log(`Listening on port ${port}!`);
});