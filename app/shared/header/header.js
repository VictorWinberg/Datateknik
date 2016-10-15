angular.module('header', []).
  controller('HeaderController', function($scope) {

    function fetch_courses(callback) {
      var get_course = function(url, callback) {
        var items = [];
        $.getJSON(url, function(data) {
          $.each( data, function( key, val ) {
            var type = val.name.slice(-3);
            var url = "https://api.github.com/repos/victorwinberg/datateknik/contents/";
            var href = "datateknik/" + val.url.slice(url.length);
            console.log(href);
            if(val.type == "file" && type != "jpg" && type != "png" && type != "css") {
              items.push({
                title: val.name,
                href: href
              });
            }
          });
          console.log(1);
          callback(items);
        });
      }

      var courses = [];
      $.getJSON("https://api.github.com/repos/victorwinberg/datateknik/contents/", function(data){
        var gathered = 0;
        var fetched = 0;
        $.each( data, function( key, val ) {
          if(val.type == "dir" && val.name != "app" && val.name != "assets") {
            gathered++;
            get_course(val.url, function(items) {
              courses.push({
                title: val.name,
                items: items
              });
              fetched++
              if(fetched == gathered) {
                console.log(2);
                callback(courses);
              }
            });
          }
        });
      });
    }
    $scope.dropdowns = [{title: "Laddar..."}];
    fetch_courses(function(courses) {
      $scope.dropdowns = courses;
      $scope.$apply()
      console.log(3);
      console.log($scope.dropdowns);
    });

    $scope.logopath = 'assets/img/dseklogo.svg';
});
