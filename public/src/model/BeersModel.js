angular.module('CervejaMe')
	.service('BeersModel',
	function($http, CURRENT_BACKEND) {
		var service = this;
		console.log("CURRENT_BACKEND in model = " + CURRENT_BACKEND);
		
		service.all = function() {
			//console.log("BeersModel : all");
			return $http.get(CURRENT_BACKEND + '/brewerydb/beer/all')
				.then (function(result) {
					//console.log("returning all:" + JSON.stringify( result.data.data ) ) ;
					return result.data.data;
				});		
		};

		service.fetchByName = function(beerName) {
			//console.log("BeersModel : fetchByName : " + beerName);
			return $http.get(CURRENT_BACKEND + '/brewerydb/beer/name/' + beerName)
				.then (function (result) {
					return result.data.data;					
				});

		};

	});	