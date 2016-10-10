angular.module('website').
  config(
  ['$routeProvider',
    function($routeProvider) {
      $routeProvider.
        when('/nyheter', {
          templateUrl:'app/shared/basic-template/basic-template.html',
          controller:'NewsController'
        }).
        otherwise({
          redirectTo: '/',
          templateUrl: 'app/shared/basic-template/basic-template.html',
          controller: 'HomeController'
        });
      }]);
