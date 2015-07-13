'use strict';

var controllersModule = require('./_index');

/**
 * @ngInject
 */
function ExampleCtrl($scope, SearchService) {

  // ViewModel
  // $scope I do need to inject $scope into the controller
  // Controller As technique is cleaner and makes it easy to see what is being exposed to the view
  var vm = this;

  vm.title = 'Foursquery';

  $scope.getVenues = function(location) {
    SearchService.get(location).then(function (data) {
      var response = data.response;

      vm.venues = response.venues;
    }, function(response) {
      vm.exception = 'No results found';
    });
  };
}

controllersModule.controller('ExampleCtrl', ExampleCtrl);
