/* global angular */
angular.module('contatooh').controller('ContatosController',
  function ($scope, $resource) {
    const Contato = $resource('/contatos')
    const buscaContatos = () => {
      Contato.query(
        (contatos) => {
          $scope.contatos = contatos
        },
        (erro) => {
          console.log('Não foi possível obter a lista de contatos.')
          console.log(erro)
        }
      )
    }

    buscaContatos()
    $scope.filtro = ''
  }
)
