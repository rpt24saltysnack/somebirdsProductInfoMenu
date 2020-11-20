const express = require('express');
const bodyParser = require('body-parser');
const helpers = require('./database/helpers.js')
const port = 3002;

const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));

app.use(express.static(__dirname + '/public'));

app.get('/products/:shoeName/summary', (req, res) => {

  helpers.getShoeData(req.params.shoeName, (err, doc) => {
    if (err) {
      res.sendStatus(404);
    }
    res.send(doc[0]);
  });
})

app.listen(port, () => {
  console.log(`Listening on port ${port}`);
});