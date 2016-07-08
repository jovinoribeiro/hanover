angular.module('Cerveja.Breweries')
	.controller('BreweriesCtrl', 
		function($http, $routeParams, CURRENT_BACKEND) {

			var breweriesCtrl = this;

			breweriesCtrl.name = $routeParams['name'];

			breweriesCtrl.getAllBreweries = function() {

				$http.get(CURRENT_BACKEND + '/brewerydb/brewery/all')
				.then (function(result) {
					
					breweriesCtrl.breweries = result.data.data;

				});		
			};

			breweriesCtrl.getBreweryByName = function(breweryName) {
				$http.get(CURRENT_BACKEND + '/brewerydb/brewery/name/' + breweryName)
				.then(function(result) {
					breweriesCtrl.breweries = result.data.data;
				});
			};

			if (breweriesCtrl.name != null) {
				breweriesCtrl.getBreweryByName(breweriesCtrl.name);
			} else {
				breweriesCtrl.getAllBreweries();	
			}
			

		}
	);