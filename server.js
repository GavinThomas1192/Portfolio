'use-strict';
let express = require('express');
let app = express();

const bodyParser = require('body-parser').urlencoded({extended: true});
const PORT = process.env.PORT || 3001;

app.use(express.static('./'))

app.post('/articles', bodyParser, function(request, response) {

  console.log(request.body);
  response.send('Record posted to server!!');
})

app.listen(PORT, function() {
  console.log(`Listening on port:" ${PORT}"`)
});
