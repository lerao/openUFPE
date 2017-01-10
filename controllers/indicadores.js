app.controller('indicadoresCtrl', chartController);

chartController.$inject = ['$scope', '$http'];

function chartController ($scope, $http) {

    //grafico
    //$scope.labels = ['2008', '2007', '2008', '2009', '2010', '2011', '2012'];
    //$scope.series = ['Numero de repovacoes no ultimo semestre', 'numero de reprovacoes da disciplina'];
    //$scope.data = [
    //[65, 59, 80, 81, 56, 55, 40],
    //[200, 48, 40, 19, 86, 27, 90]
    //];
  
  function pegarDados () {
    console.log('chamou o pegar dados');

    $http({
      method: 'GET',
      url: 'http://localhost:8080/find/orgao/format/json',
      headers: {
        'Content-Type' : 'application/json'
      }
    }).then(function successCallback(res) {
      $scope.indicadores = res.data;
      console.log(res.data);

      
      var dados   = res.data;
      var cursos  = [];
      var mediaCursos = 0;

      //
      for (var i = 0; i < dados.length; i++) {
      //
        if (dados.tipo == "curso") {
          cursos.push(dados.tipo);
          mediaCursos ++;
        }
      //
       }
      //
      // $scope.cursos = cursos;

    }, function errorCallback(res) {
      console.log('deu erro');
    });

  }

  $scope.pegarDados = pegarDados;

}



 