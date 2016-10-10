angular.module('website', ['ngRoute', 'header']).
  controller('TopicalController', function($scope) {
    $scope.title = 'Aktuellt';
    $scope.body = 'Dsek.se renoveras om';
  }).
  controller('ExperimentsController', function($scope) {
    $scope.title = 'Experiments';
    $scope.body = 'Warning this is experimental';
  }).
  controller('PersonCtrl', function($scope) {

  });
