angular.module('Cerveja.Beers')
	.controller('BeersCtrl', 
		function($http, $routeParams) {

			var beersCtrl = this;

			beersCtrl.name = $routeParams['name'];
			console.info('name:' + beersCtrl.name);
			

			beersCtrl.getAllBeers = function() {
				beersCtrl.pageTitle = "Display lists of all possible beers";
				$http.get('http://localhost:3000/brewerydb/beer/all')
				.then (function(result) {
					beersCtrl.beers = result.data.data;
				});				
			};

			beersCtrl.getBeerByName = function(beerName) {
				beersCtrl.pageTitle = "Display lists of your beer of choice";
				$http.get('http://localhost:3000/brewerydb/beer/name/' + beerName)
				.then (function (result) {
					beersCtrl.beers = result.data.data;					
				});
			};

			if (beersCtrl.name != null) {
				beersCtrl.getBeerByName(beersCtrl.name);
			} else {
				
				beersCtrl.getAllBeers();	
			}
			

			/** this one does not work  because of 'no access controll alow origin' blah blah issue */
/*			beersCtrl.getAllBeersUsingResource = function() {
				console.info('going here');
				//var Beers = $resource('http://localhost:3000/brewerydb/all');
				var Beers = $resource('http://api.brewerydb.com/v2/beers?styleId=3&hasLabels=Y&key=4e7d623f860337f84e64c5be5c80f8ea');
				Beers.get( function (result) {
					
					//alert(JSON.stringify(result.data));
					beersCtrl.beers = result.data;
				});
			};*/

		}
	);