angular.module('Cerveja.Beer')
	.controller('BeerCtrl',
		function($http, $routeParams, CURRENT_BACKEND) {

			console.log("CURRENT_BACKEND:" + CURRENT_BACKEND);
			var beerCtrl = this;

			beerCtrl.pageTitle = 'Display your selected beer';

			beerCtrl.beerId = $routeParams['id'];
			console.info("selected beer id: " + beerCtrl.beerId);

			beerCtrl.getBeerById = function(beerId) {
				$http.get(CURRENT_BACKEND + '/brewerydb/beer/id/' + beerId)
				.then (function (result) {
					beerCtrl.beer = result.data.data;
					console.info(beerCtrl.beer);
				});
			};

			/*beerCtrl.getBeerById(beerCtrl.beerId);*/

		}
	);