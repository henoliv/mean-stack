// config/express.js
const express = require('express')

module.exports = () => {
  const app = express()

  // configuração de ambiente
  app.set('port', 3000)

  // middleware
  app.use(express.static('./public'))

  return app
}
