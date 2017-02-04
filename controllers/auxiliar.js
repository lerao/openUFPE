app.controller('indicadoresCtrl', chartController);

chartController.$inject = ['$scope', '$http'];

function chartController ($scope, $http) {

    //grafico
  $scope.labels = ['2008', '2007', '2008', '2009', '2010', '2011', '2012'];
  $scope.series = ['Numero de repovacoes no ultimo semestre', 'numero de reprovacoes da disciplina'];
  $scope.data = [
    [65, 59, 80, 81, 56, 55, 40],
    [200, 48, 40, 19, 86, 27, 90]
  ];
  
  // posts
  $scope.posts = [];

  $scope.requisicao = function (select) {
    console.log(select);
    switch (select.tipo) {
      case "curso":
        pegarCursos();
        break;
      default:

    }
  }

  function pegarCursos () {
    console.log('chamou o pegar cursos');

     $http({
      method: 'GET',
      url: 'http://http://localhost:83/x/gereaca/',
      headers: {
        'Content-Type' : 'application/json'
      }
    }).then(function successCallback(res) {
      $scope.posts = res.data;

      console.log(res.data);

      // var dados   = res.data;
      // var cursos  = [];
      // var mediaCursos = 0;
      //
      // for (var i = 0; i < dados.length; i++) {
      //
      //   if (dados.tipo == "curso") {
      //     cursos.push(dados);
      //     mediaCursos ++;
      //   }
      //
      // }
      //
      // $scope.cursos = cursos;

    }, function errorCallback(res) {
      console.log('deu erro');
    });

  }

  $scope.pegarCursos = pegarCursos;

}



//Exemple - Jourge

var res = [
        {
          "nome": "casa",
          "tipo": "imovel",
        }, 
        {
          "nome": "skate",
          "tipo": "brinquedo"
        }, 
        {
          "nome": "violao",
          "tipo": "instrumento musical"
        }
      ];

      var nomes = [];
      var tipos = [];
      var objetos = [];
      //
      for (var i = 0; i < res.length; i++) {
        nomes.push(res[i].nome);
        tipos.push(res[i].tipo);
        objetos.push(res[i]);
      }

      console.log("nomes: ", nomes);

      nomes.pop();

      console.log("nomes com pop: ", nomes);


      //
      // $scope.cursos = cursos;
