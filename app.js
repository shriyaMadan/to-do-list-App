const express = require('express')
var app = express()
const path = require("path")
var bodyParser = require('body-parser')
const items = []
app.use(express.static('public'))

app.set("view engine" , "ejs")
  app.set('views',path.join(__dirname,'views'))

app.get('/',function(_req, res){
  res.render('index', {items});
});

app.get('/add', (req, res) => {
  items.push(req.query.item)
  res.send(items)
})

app.get('/delete', (req, res) => {
  const index = items.indexOf(req.query.item);
  if (index > -1) {
    items.splice(index, 1);
  }
  res.send(items)
})

const port = process.env.PORT || 3000
app.listen(port, () => console.log(`app listening at http://localhost:${port}`))
