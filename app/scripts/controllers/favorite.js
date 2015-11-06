'use strict';

/**
 * @ngdoc function
 * @name jiffJiffApp.controller:FavoriteCtrl
 * @description
 * # FavoriteCtrl
 * Controller of the jiffJiffApp
 */
angular.module('jiffJiffApp')
  .controller('FavoriteCtrl', function ($scope, jiffAPI, $localStorage) {
    $scope.storage = $localStorage;
  });
