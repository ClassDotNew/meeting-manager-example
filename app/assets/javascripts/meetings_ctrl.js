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

    $scope.createMeeting = function(inputName,inputAddress,inputStartTime,inputEndTime,inputNotes) {
      var newestMeeting = {
        name: inputName,
        address: inputAddress,
        startTime: inputStartTime,
        endTime: inputEndTime,
        theNotes: inputNotes
      }
      $http.post('/api/v1/meetings', newestMeeting).then(function(response){
        // actually add the new meeting to my view
        $scope.meetings.push(response.data)
      }, function(responseError){
        console.log(responseError);
      })
    }
    // end of the controller
  });


}());
