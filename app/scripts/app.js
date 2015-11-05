'use strict';

/**
 * @ngdoc overview
 * @name jiffJiffApp
 * @description
 * # jiffJiffApp
 *
 * Main module of the application.
 */
angular
  .module('jiffJiffApp', [
    'ngAnimate',
    'ngAria',
    'ngCookies',
    'ngMessages',
    'ngResource',
    'ngRoute',
    'ngSanitize',
    'ngStorage', // added to enable localStorage features
    'ngTouch'
  ])
  .config(function ($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'views/main.html',
        controller: 'MainCtrl',
        controllerAs: 'main'
      })
      .when('/about', {
        templateUrl: 'views/about.html',
        controller: 'AboutCtrl',
        controllerAs: 'about'
      })
      .when('/random', {
        templateUrl: 'views/random.html',
        controller: 'RandomCtrl',
        controllerAs: 'random'
      })
      .when('/favorite', {
        templateUrl: 'views/favorite.html',
        controller: 'FavoriteCtrl',
        controllerAs: 'favorite'
      })
      .otherwise({
        redirectTo: '/'
      });
  });
