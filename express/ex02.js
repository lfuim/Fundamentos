const express = require('express')
const server = express()

server.get('/', function (req, res, next) {
   console.log('Inicio ...')
   next()
   console.log('Fim ...')
})

server.get('/', function (req, res, next) {
  console.log('Resposta ...')
  res.send('<h1>Feita a resposta .!</h1>')
  next()


})

server.get('/', function (req, res) {
  console.log('Resposta nova ...')
  res.send('<h1>Feita a resposta novamente.!</h1>')
})

server.listen(3000, () => console.log('Executando ....'))
