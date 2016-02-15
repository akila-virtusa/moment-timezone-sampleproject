'use strict';

angular.module('myApp.view1', ['ngRoute'])

.config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/view1', {
    templateUrl: 'view1/view1.html',
    controller: 'View1Ctrl'
  });
}])

.controller('View1Ctrl', ['$scope', function($scope) {
  $scope.message = libs.test();
  $scope.timeZone = 'America/Los_Angeles';
  $scope.formatDate = function (iso8601Date)
  {
    var momentFromString = libs.moment(iso8601Date);
    return momentFromString.tz($scope.timeZone).format('MM.DD.YYYY HH:mm:ss');
  };
}]);