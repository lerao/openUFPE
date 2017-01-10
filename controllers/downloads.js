app.controller('downloadsCtrl', downloadsController);

downloadsController.$inject = ['$scope', '$http'];

function downloadsController ($scope, $http) {

  
  function pegarDadosPessoa () {
    console.log('chamou o pegar dados pessoa');

    $http({
      method: 'GET',
      url: 'http://localhost:8080/find/about/pessoa',
      headers: {
        'Content-Type' : 'application/json'
      }
    }).then(function successCallback(res) {

      var data = res.data;
      console.log(data);
      
      if(data && data[0]) {
        $scope.posts = data;
      } else {
        $scope.posts = [data];
      }


    }, function errorCallback(res) {
      console.log('deu erro');
    });

  }

  $scope.pegarDadosPessoa = pegarDadosPessoa;

}



 