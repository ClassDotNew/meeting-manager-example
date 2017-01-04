(function() {
  "use strict";

  angular.module("app").controller("meetingsCtrl",function($scope, $http){
    $scope.message = 'hello';
    $scope.setup = function(){
      // grab data from the db in JSON format
      $http.get('/api/v1/meetings').then(function(response){
        $scope.meetings = response.data;

      })
    }

    $scope.sortByAttribute = function(){
      $scope.attribute = 'startTime';
      $scope.descending = !$scope.descending;
    }
    // end of the controller
  });


}());
