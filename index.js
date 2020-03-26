const express = require('express')
const app = express()
const port = 3000
let Poet = require('poet');

var poet = Poet(app, {
  posts: './_posts/',
  postsPerPage: 5,
  metaFormat: 'json'
});

poet.init().then(function () {
  // ready to go!
});

app.get('/', (req, res) => res.send('Hello World!'))

app.listen(port, () => console.log(`Example app listening on port ${port}!`))


