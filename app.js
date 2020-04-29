const express = require('express')
const expressip = require('express-ip')
var app = express()
const path = require("path")
var bodyParser = require('body-parser')
var session = require('express-session')
const { uuid } = require('uuidv4');

app.use(express.static('public'))
const data = []
var sess = {
  secret: 'keyboard cat',
  cookie: {}
}
app.use(session(sess))
app.use(expressip().getIpInfoMiddleware);
app.set("view engine" , "ejs")
app.set('views',path.join(__dirname, 'views'))

app.get('/',function(req, res){
  console.log(req.ipInfo)
  if (req.session.id == null) req.session.id = uuid()
  res.render('index', {items: req.session.list});
});

app.get('/add', (req, res) => {
  if (req.session.list == null) req.session.list = []
  const id = req.session.id
  const value = req.query.item
  req.session.list.push(value)
  data.push({id, value, ip: req.ipInfo})
  res.send(req.session.list)
})

app.get('/delete', (req, res) => {
  const index = req.session.list.indexOf(req.query.item);
  if (index > -1) {
    req.session.list.splice(index, 1);
  }
  res.send(req.session.list)
})

app.get('/showme', (req, res) => {
  res.send(data.map((datum) => {

    return `<div>${JSON.stringify(datum)}</div>`

  }).join(''))
})

const port = process.env.PORT || 3000
app.listen(port, () => console.log(`app listening at http://localhost:${port}`))
