const express = require('express')
const app = express()
const bodyParser = require('body-parser');

const port = process.env.PORT || 3000

app.use(bodyParser.urlencoded({extended: true}))
app.use(bodyParser.json())

const route = require('./routers/index.routers')
route(app)

app.get('/', (req, res) => {
  res.send({message: 'Hello'})
})

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})