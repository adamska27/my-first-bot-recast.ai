const express = require('express');
const morgan = require('morgan');
const bodyParser = require('body-parser');

const app = express();
const port = process.env.PORT || 5000;

/*--------MIDDLEWARE----------*/
app.use((req, res, next) => {
  res.header('Access-Control-Allow-Origin', '*');
  res.header('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE, HEAD, PATCH');
  res.header('Access-Control-Allow-Headers', 'Origin, Access-Control-Allow-Origin, X-Requested-With, Content-Type, Accept');
  res.header('Access-Control-Max-Age', '3600');
  next();
});

app.use(morgan(':method : url :status :res[content-length] - :response-time ms'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));

const recastai = require('recastai');
const client = new recastai.request('2acb39742532466c668899188d2d7b13', 'en');

const test = (message) => {
  client.converseText(message)
  .then( (res) => {
  if (res.action) console.log('Action: ', res.action.slug)
  const reply = res.reply()
  console.log('Reply: ', reply)
  })
  return 'hello'
}

app.get('/get', (req, res) => {
  res.send('hello world')
})

.post('/post', (req, res) => {
  console.log(`you've post something`);

  const message = req.body.message

  console.log('message ', message);

  test(message).then( () => console.log('hello'))

})

app.listen(port, () => console.log(`The app is listenning on the port ${port}`))
