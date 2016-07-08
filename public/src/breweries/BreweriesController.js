angular.module('Cerveja.Breweries')
	.controller('BreweriesCtrl', 
		function($routeParams, BreweriesModel) {

			var breweriesCtrl = this;

			breweriesCtrl.name = $routeParams['name'];

			breweriesCtrl.getAllBreweries = function() {

				BreweriesModel.all()
					.then(function(result) {
						breweriesCtrl.breweries = result;
					}, function(reason) {
						console.log('REASON:'+ reason);	
					});
			};

			breweriesCtrl.getBreweryByName = function(breweryName) {

				BreweriesModel.fetchByName(breweryName)
					.then(function(result) {
						breweriesCtrl.breweries = result;	
					}, function(reason) {
						console.log('REASON:'+ reason);	
					});
			};

			if (breweriesCtrl.name != null) {
				breweriesCtrl.getBreweryByName(breweriesCtrl.name);
			} else {
				breweriesCtrl.getAllBreweries();	
			}
			

		}
	);