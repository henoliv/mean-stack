// app/controller/home.js

module.exports = () => {
  const controller = {}

  controller.index = (req, res) => {
    res.render('index', {nome: 'Espress'})
  }

  return controller
}
