'use strict';

var servicesModule = require('./_index.js');

/**
 * @ngInject
 */
function SearchService($q, $http, AppSettings) {
  var service = {};
  var url = AppSettings.apiUrl + AppSettings.venuesSearch;

  service.get = function(location) {
    var deferred = $q.defer();

    $http({
      url: url,
      method: 'GET',
      params: {
        near: location,
        client_id: AppSettings.clientId,
        client_secret: AppSettings.clientSecret,
        v: AppSettings.v
      }
    }).success(function(data) {
        deferred.resolve(data);
    }).error(function(err, status) {
        deferred.reject(err, status);
    });

    return deferred.promise;
  };

  return service;

}

servicesModule.service('SearchService', SearchService);
