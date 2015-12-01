'use strict';

/**
 * @ngdoc function
 * @name jiffJiffApp.controller:FavoriteCtrl
 * @description
 * # FavoriteCtrl
 * Controller of the jiffJiffApp
 */
angular.module('jiffJiffApp')
  .controller('FavoriteCtrl', function ($scope, jiffAPI, $sce, $localStorage) {
    $scope.videosFound = jiffAPI.query();
    $scope.storage = $localStorage; // local storage is saved in the favorite view

    $scope.findVideos = function(){
        $scope.videosFound = jiffAPI.query({
            query: $scope.location
        });
        $scope.searchQuery = $scope.location;
    };
  });
