app.controller('HomeController', function($scope, $location) {
  $scope.message = 'Routing pages with ngRoute is damn awesome!';
  console.log($location.path())
});