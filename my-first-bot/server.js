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

const client = new recastai.request('2acb39742532466c668899188d2d7b13', 'en')

app.get('/', (req, res) => {
  res.send('Welcome to my app!')
  })
  .post('/', (req, res) => {
  const input = req.body.userMessage.join()
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
