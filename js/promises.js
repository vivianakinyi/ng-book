angular.module('myApp', [])

.controller('DashboardController', [
  '$scope', 'PatientService',
    function($scope, PatientService) {
      PatientService.getRecords()
      .then(function(data) {
        $scope.getData = data;
      })
}])

.factory('PatientService', [
  '$q', '$http',
    function($q, $http) {
      var getRecords = function() {
        var deferred = $q.defer();
        // Get list of open angular js pull requests from github
        // $http.get('https://api.github.com/repos/angular/angular.js/pulls')
        $http.get('./data/data.json')
        .success(function(data) {
          deferred.resolve(data);
        })
        .error(function(reason) {
          deferred.reject(reason);
        })
        return deferred.promise;
      }

      return {
        getRecords: getRecords
      };
}]);