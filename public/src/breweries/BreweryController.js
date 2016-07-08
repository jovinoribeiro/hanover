angular.module('Cerveja.Brewery')
	.controller('BreweryCtrl', 
		function($http, $routeParams) {
			var breweryCtrl = this;

			breweryCtrl.breweryId = $routeParams['id'];
			console.info('selected brewery:' + breweryCtrl.breweryId);

			breweryCtrl.getBreweryById = function(breweryId) {
				$http.get('http://localhost:3000/brewerydb/brewery/id/' + breweryId)
				.then (function(result) {
					breweryCtrl.brewery = result.data.data;
					console.info(breweryCtrl.brewery);
				});
			};

			breweryCtrl.getBreweryById(breweryCtrl.breweryId);
		}
	);