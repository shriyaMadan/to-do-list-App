const express = require('express')
var app = express()
const path = require("path")
var bodyParser = require('body-parser')

app.use(express.static('public'))

app.set("view engine" , "ejs")
  app.set('views',path.join(__dirname,'views'))

app.get('/',function(_req, res){
  res.render('index');
});

const port = process.env.PORT || 3000
app.listen(port, () => console.log(`app listening at http://localhost:${port}`))
