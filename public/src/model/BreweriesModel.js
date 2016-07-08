angular.module('CervejaMe')
	.service('BreweriesModel',
		function($http, CURRENT_BACKEND) {
			
			var service = this;

			service.all = function() {
				return $http.get(CURRENT_BACKEND + '/brewerydb/brewery/all')
				.then ( function(result) {
					return result.data.data;
				});
			};

			service.fetchByName = function(breweryName) {
				return $http.get(CURRENT_BACKEND + '/brewerydb/brewery/name/' + breweryName)
				.then(function(result) {
					return result.data.data;
				});
			};

		});