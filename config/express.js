// config/express.js
const express = require('express')

module.exports = () => {
  const app = express()

  // configuração de ambiente
  app.set('port', 3000)

  // middleware
  app.use(express.static('./public'))

  // configurando o ejs para as views
  app.set('view engine', 'ejs')
  app.set('views', './app/views')

  return app
}
