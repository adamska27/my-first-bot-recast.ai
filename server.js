const express = require('express')
const app = express()
const morgan = require('morgan')
const bodyParser = require('body-parser')
const recastai = require('recastai')

/*--------MIDDLEWARE----------*/
app.use((req, res, next) => {
  res.header('Access-Control-Allow-Origin', '*')
  res.header('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE, HEAD, PATCH')
  res.header('Access-Control-Allow-Headers', 'Origin, Access-Control-Allow-Origin, X-Requested-With, Content-Type, Accept')
  res.header('Access-Control-Max-Age', '3600')
  next()
});

app.use(morgan(':method : url :status :res[content-length] - :response-time ms'))
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({extended: false}))

var token
var client

app.get('/', (req, res) => {
  res.send('Welcome to my app!')
  console.log('token from the home: ', token)
  console.log('client from the home: ', client)
  })
  .post('/createToken', (req, res) => {
    token = req.body.token
    console.log('token: ', token)
    client = new recastai.request(token, 'en')
    console.log('client: ', client)
    res.send('The token is in the place')
  })
  .post('/', (req, res) => {
  const input = req.body.userMessage.join()
  console.log('input: ', input)
  client.converseText(input)
  .then(result => {
    const botReply = result.reply()
    console.log('botReply: ', botReply)
    return botReply
  })
  .then( result => {
    console.log('result: ', result)
    res.send(result)
    })
  })

app.listen(3001, () => console.log('App is running on port 3001'))
