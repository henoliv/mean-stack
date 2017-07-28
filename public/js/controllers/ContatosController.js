/* global angular */
angular.module('contatooh').controller('ContatosController',
  function ($scope, $http) {
    $scope.total = 0

    $scope.incrementa = () => $scope.total++

    const promise = $http.get('/contatos')
    promise
      .success((data) => {
        $scope.contatos = data
      })
      .catch((statusText) => {
        console.log(statusText)
      })

    $scope.filtro = ''
  }
)
