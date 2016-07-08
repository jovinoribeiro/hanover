angular.module('Cerveja.Beer')
	.controller('BeerCtrl',
		function($http, $routeParams) {

			var beerCtrl = this;

			beerCtrl.pageTitle = 'Display your selected beer';

			beerCtrl.beerId = $routeParams['id'];
			console.info("selected beer id: " + beerCtrl.beerId);

			beerCtrl.getBeerById = function(beerId) {
				$http.get('http://localhost:3000/brewerydb/beer/id/' + beerId)
				.then (function (result) {
					beerCtrl.beer = result.data.data;
					console.info(beerCtrl.beer);
				});
			};

			beerCtrl.getBeerById(beerCtrl.beerId);

		}
	);