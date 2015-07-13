'use strict';

/**
 * @ngInject
 */
function OnConfig($stateProvider, $locationProvider, $urlRouterProvider, $compileProvider) {

  $locationProvider.html5Mode(true);

  // Disable binding information
  $compileProvider.debugInfoEnabled(false);

  $stateProvider
  .state('Home', {
    url: '/',
    controller: 'ExampleCtrl as home',
    templateUrl: 'home.html',
    title: 'Home'
  });

  $urlRouterProvider.otherwise('/');
}

module.exports = OnConfig;
