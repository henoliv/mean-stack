// config/express.js
const express = require('express')
const home = require('app/routes/home')

module.exports = () => {
  const app = express()

  // configuração de ambiente
  app.set('port', 3000)

  // middleware
  app.use(express.static('./public'))

  // configurando o ejs para as views
  app.set('view engine', 'ejs')
  app.set('views', './app/views')

  // configurando rotas
  home(app)

  return app
}
