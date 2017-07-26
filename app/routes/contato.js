// app/route/contato.js
module.exports = (app) => {
  const controller = app.controllers.contato
  app.get('/contatos', controller.listaContatos)
}
