// app/route/contato.js
module.exports = (app) => {
  const controller = app.controllers.contato
  app.get('/contatos', controller.listaContatos)
  app.get('/contatos/:id', controller.obtemContato)
  app.delete('/contatos/:id', controller.removeContato)
}
