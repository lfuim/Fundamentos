const express = require('express')
const server = express()

server.route('/clientes')
  .get((res,req) ==> res.send('Lista Cliente') )
  .post((res,req) ==> res.send('Novo Cliente') )
  .put((res,req) ==> res.send('Altera Cliente') )
  .delete((res,req) ==> res.send('Exclui Cliente') )


server.listen(3000, () => console.log('Executando ....'))
