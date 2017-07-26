// config/express.js
const express = require('express')
const load = require('express-load')

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
  load('models', { cwd: 'app' })
    .then('controllers')
    .then('routes')
    .into(app)

  return app
}
