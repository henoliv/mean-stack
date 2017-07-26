// config/express.js
const express = require('express')
const load = require('express-load')
const bodyParser = require('body-parser')

module.exports = () => {
  const app = express()

  // configuração de ambiente
  app.set('port', 3000)

  // middleware
  app.use(express.static('./public'))
  app.use(bodyParser.urlencoded({extended: true}))
  app.use(bodyParser.json())
  app.use(require('method-override')())

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
