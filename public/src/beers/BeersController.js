angular.module('Cerveja.Beers')
	.controller('BeersCtrl', 
		function($routeParams, BeersModel) {

			var beersCtrl = this;

			beersCtrl.name = $routeParams['name'];
			
			beersCtrl.getAllBeers = function() {
				BeersModel.all()
					.then(function(result) {
						beersCtrl.beers = result;
						console.log("all beers: " + beersCtrl.beers);
					}, function(reason) {
						console.log('REASON:'+ reason);	
					});
					
			};

			beersCtrl.getBeerByName = function(beerName) {

				BeersModel.fetchByName(beerName)
					.then( function(result) {
						beersCtrl.beers = result;	
					}, function(reason) {
						console.log('REASON:' + reason);
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