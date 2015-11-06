'use strict';

/**
 * @ngdoc function
 * @name jiffJiffApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the jiffJiffApp
 */
angular.module('jiffJiffApp')
  .controller('MainCtrl', function ($scope, jiffAPI, $localStorage) {
    $scope.videosFound = jiffAPI.query();
    $scope.storage = $localStorage;

    $scope.findVideos = function(){
        $scope.videosFound = jiffAPI.query({
            query: $scope.location
        });
        $scope.searchQuery = $scope.location;
    };
  });
