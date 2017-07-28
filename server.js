'use-strict';
let express = require('express');
let app = express();
const requestProxy = require('express-request-proxy');
const bodyParser = require('body-parser').urlencoded({extended: true});
const PORT = process.env.PORT || 3001;

app.use(express.static('.'))

app.post('/articles', bodyParser, function(request, response) {
  response.send('Record posted to server!!');
})

function proxyGitHub(request, response) {
  console.log('Routing GitHub request for', request.params[0]);
  (requestProxy({
    url: `https://api.github.com/${request.params[0]}`,
    headers: {Authorization: `token ${process.env.GITHUB_TOKEN}`}
  }))(request, response);
}

app.get('/github/*', proxyGitHub);


app.get('/', (req, res) => {
  res.sendFile('./index.html', {root: './'})
});

app.listen(PORT, function() {
  console.log(`Listening on port:" ${PORT}"`)
});
