const express = require('express')
const hbs = require('hbs')
require('./views/helpers/helpers')

const port = process.env.PORT || 8080

const app = express();

app.use(express.static(__dirname + '/public'))

//Express hbs
hbs.registerPartials(__dirname + '/views/partials')

app.set('view engine', 'hbs');

app.get('/', (req, res) => {
  res.render('home', {
    name: 'ernesto'
  })
});

app.get('/about', (req, res) => {
  res.render('about')
});

app.listen(port, (err) => {
  if (err) {
    console.log(err);
  } else {
    console.log(`listening port ${port}`);
  }
});
